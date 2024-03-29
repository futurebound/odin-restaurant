import FoodOne from "../img/food-one.jpg";
import { LOREM_TEXT } from "./utils";
import generateTextElement from "./utils";

const loadHome = () => {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");
  
  const carouselDiv = loadCarousel();
  const hoursDiv = loadHours();
  const reservationsDiv = loadReservations();
  const dressCodeDiv = loadDressCode();
  
  homeDiv.appendChild(carouselDiv);
  homeDiv.appendChild(hoursDiv);
  homeDiv.appendChild(reservationsDiv);
  homeDiv.appendChild(dressCodeDiv);

  return homeDiv;
}

const loadCarousel = () => {
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");
  const foodOne = new Image();
  foodOne.src = FoodOne;
  foodOne.alt = "photo of food";

  const photoCredit = document.createElement("p");
  const photoCreditLink = document.createElement("a");
  photoCreditLink.href="https://unsplash.com/@ellaolsson";
  photoCreditLink.textContent = "Ella Olsson";
  photoCredit.textContent = "Photo from Unsplash by ";
  photoCredit.appendChild(photoCreditLink);

  carouselDiv.appendChild(foodOne);
  carouselDiv.appendChild(photoCredit);

  return carouselDiv;
}

const loadHours = () => {
  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("info");

  hoursDiv.appendChild(generateTextElement("h1", "HOURS & LOCATION"));
  hoursDiv.appendChild(generateTextElement("p", "133 N Moon Landing Way"));
  hoursDiv.appendChild(generateTextElement("p", "Houston, TX 88003"));
  hoursDiv.appendChild(generateTextElement("p", "(888) 888 - 8888"));
  hoursDiv.appendChild(generateTextElement("h2", "Breakfast"));
  hoursDiv.appendChild(generateTextElement("p", "Friday - Saturday"));
  hoursDiv.appendChild(generateTextElement("p", "9AM - 1PM"));
  hoursDiv.appendChild(generateTextElement("h2", "Lunch"));
  hoursDiv.appendChild(generateTextElement("p", "Daily"));
  hoursDiv.appendChild(generateTextElement("p", "1PM - 5PM"));
  hoursDiv.appendChild(generateTextElement("h2", "Dinner"));
  hoursDiv.appendChild(generateTextElement("p", "Daily"));
  hoursDiv.appendChild(generateTextElement("p", "5PM - 9pm"));

  return hoursDiv;
}

const loadReservations = () => {
  const reservationsDiv = document.createElement("div");
  reservationsDiv.classList.add("info");

  reservationsDiv.appendChild(generateTextElement("h1", "RESERVATIONS"));
  reservationsDiv.appendChild(generateTextElement("p", LOREM_TEXT));
  reservationsDiv.appendChild(generateTextElement("p", LOREM_TEXT));

  return reservationsDiv;
}

const loadDressCode = () => {
  const dressCodeDiv = document.createElement("div");
  dressCodeDiv.classList.add("info");

  dressCodeDiv.appendChild(generateTextElement("h1", "DRESS CODE"));
  dressCodeDiv.appendChild(generateTextElement("p", LOREM_TEXT));

  return dressCodeDiv;
}

export default loadHome;