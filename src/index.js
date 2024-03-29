"use strict";

import "./style.css";
import loadHome from "./js/home";
import loadMenu from "./js/menu";
import loadAbout from "./js/about";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");

homeButton.addEventListener("click", () => {
  contentDiv.replaceChildren();
  const homeDiv = loadHome();
  contentDiv.appendChild(homeDiv);
});

menuButton.addEventListener("click", () => {
  contentDiv.replaceChildren();
  const menuDiv = loadMenu();
  contentDiv.appendChild(menuDiv);
});