"use strict";

import generateTextElement from "./utils";
import breakfastImgPath from "../img/breakfast.jpg";
import breakfastMenuImgPath from "../img/breakfast-menu.png";
import lunchImgPath from "../img/lunch.jpg";
import lunchMenuImgPath from "../img/lunch-menu.png";
import dinnerImgPath from "../img/dinner.jpg";
import dinnerMenuImgPath from "../img/dinner-menu.png";


const loadMenu = () => { 
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const breakfastDiv = loadBreakfast();
  const lunchDiv = loadLunch();
  const dinnerDiv = loadDinner();
  
  menuDiv.appendChild(breakfastDiv);
  menuDiv.appendChild(lunchDiv);
  menuDiv.appendChild(dinnerDiv);

  return menuDiv;
}

const loadBreakfast = () => {
  const breakfastDiv = document.createElement("div");
  breakfastDiv.classList.add("menu-container");
  const breakfastTitle = generateTextElement("h1", "Breakfast");

  const breakfastSideBySide = document.createElement("div");
  breakfastSideBySide.classList.add("side-by-side");

  const breakfastMenuImg = new Image();
  breakfastMenuImg.classList.add("menu-img");
  breakfastMenuImg.src = breakfastMenuImgPath;
  breakfastMenuImg.alt = "breakfast menu image";

  const breakfastImg = new Image();
  breakfastImg.classList.add("menu-img");
  breakfastImg.src = breakfastImgPath;
  breakfastImg.alt = "french toast breakfast";
  
  breakfastSideBySide.appendChild(breakfastMenuImg);
  breakfastSideBySide.appendChild(breakfastImg);

  breakfastDiv.appendChild(breakfastTitle);
  breakfastDiv.appendChild(breakfastSideBySide);

  return breakfastDiv;
}

const loadLunch = () => {
  const lunchDiv = document.createElement("div");
  lunchDiv.classList.add("menu-container");
  const lunchTitle = generateTextElement("h1", "Lunch");

  const lunchSideBySide = document.createElement("div");
  lunchSideBySide.classList.add("side-by-side");

  const lunchMenuImg = new Image();
  lunchMenuImg.classList.add("menu-img");
  lunchMenuImg.src = lunchMenuImgPath;
  lunchMenuImg.alt = "lunch menu image";

  const lunchImg = new Image();
  lunchImg.classList.add("menu-img");
  lunchImg.src = lunchImgPath;
  lunchImg.alt = "steak sides and salad lunch";
  
  lunchSideBySide.appendChild(lunchImg);
  lunchSideBySide.appendChild(lunchMenuImg);

  lunchDiv.appendChild(lunchTitle);
  lunchDiv.appendChild(lunchSideBySide);

  return lunchDiv;
}

const loadDinner = () => {
  const dinnerDiv = document.createElement("div");
  dinnerDiv.classList.add("menu-container");
  const dinnerTitle = generateTextElement("h1", "Dinner");

  const dinnerSideBySide = document.createElement("div");
  dinnerSideBySide.classList.add("side-by-side");

  const dinnerMenuImg = new Image();
  dinnerMenuImg.classList.add("menu-img");
  dinnerMenuImg.src = dinnerMenuImgPath;
  dinnerMenuImg.alt = "dinner menu image";

  const dinnerImg = new Image();
  dinnerImg.classList.add("menu-img");
  dinnerImg.src = dinnerImgPath;
  dinnerImg.alt = "pasta dinner";
  
  dinnerSideBySide.appendChild(dinnerMenuImg);
  dinnerSideBySide.appendChild(dinnerImg);

  dinnerDiv.appendChild(dinnerTitle);
  dinnerDiv.appendChild(dinnerSideBySide);

  return dinnerDiv;
}

export default loadMenu;