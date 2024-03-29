"use strict";

import generateTextElement from "./utils";
import { LOREM_TEXT } from "./utils";
import restaurantImgPath from "../img/restaurant.jpg";


const loadAbout = () => {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");

  const aboutInfo = document.createElement("div");
  aboutInfo.classList.add("info");
  const aboutTitle = generateTextElement("h1", "OUR STORY");

  const restaurantImg = new Image();
  restaurantImg.src = restaurantImgPath;
  restaurantImg.alt = "inside of restaurant";

  aboutInfo.appendChild(aboutTitle);
  aboutInfo.appendChild(generateTextElement("p", LOREM_TEXT));
  aboutInfo.appendChild(generateTextElement("p", LOREM_TEXT));
  aboutInfo.appendChild(restaurantImg);
  aboutInfo.appendChild(generateTextElement("p", LOREM_TEXT));
  aboutInfo.appendChild(generateTextElement("p", LOREM_TEXT));

  aboutDiv.appendChild(aboutInfo);
  return aboutDiv;
}

export default loadAbout;