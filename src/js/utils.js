"use strict";

export const LOREM_TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Minima excepturi voluptate rem sed, aut eligendi quas tenetur eius 
  pariatur labore maiores alias consequatur aliquam, possimus vitae, 
  provident dolorum illum. Nesciunt distinctio sint, officiis laudantium 
  aspernatur labore hic cupiditate voluptas quo aliquam optio quae, 
  necessitatibus corporis maiores, a officia? Fugiat deleniti veritatis 
  earum labore facere placeat perferendis. Distinctio, officiis, vel 
  dignissimos corrupti amet earum commodi praesentium quae, quasi aliquid 
  facilis eligendi odio ea. Ipsum incidunt nostrum ut nobis sint sequi 
  corrupti!`;

const generateTextElement = (type, text) => {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
}

export default generateTextElement;