// TemplateCard/index.js
import css from './style.css';
import html from './template.html';
import {Card_click,
  Card_dragstart,
  Card_drag,
  Card_dragenter,
  Card_dragleave,
  Card_dragover,
  Card_drop,
  Card_dragend } from './events.js';
const utils = require("./../utils.js");
const template = utils.TextToHtmlFragment(html);

export class TemplateCard {
  constructor(content) {
    this.element = template.cloneNode(true);
    this.isValidObject(content) && this.populate(content);
    this.bindEventHandlers();
  };

  populate(content) {
    this.element.querySelector("header").innerText = content.header
    this.element.querySelector(".details").innerText = content.details;
    this.element.querySelector(".details").setAttribute("jsonValue", JSON.stringify({ x: Math.random() * 1000, t: "Hi Mr. " + (Math.random() * 100).toFixed(0) + ". How are you today?" }));
    return this.element;
  };

  isValidObject(data) {
    return data.hasOwnProperty("header")
      && typeof data.header === "string"
      && data.hasOwnProperty("details")
      && typeof data.details === "string";
  };

  bindEventHandlers() {
    let sourceElement = null;
    const card = this.element.querySelector("template-card");
    card.addEventListener("click", Card_click );
    card.addEventListener('dragstart', Card_dragstart );
    card.addEventListener('drag', Card_drag );
    card.addEventListener('dragenter', Card_dragenter );
    card.addEventListener('dragleave', Card_dragleave );
    card.addEventListener('dragover', Card_dragover );
    card.addEventListener('drop', Card_drop );
    card.addEventListener('dragend', Card_dragend );
  };
};
