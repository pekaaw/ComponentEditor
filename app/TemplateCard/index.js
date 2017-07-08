// TemplateCard/index.js
import css from './style.css';
import html from './template.html';
import * as events from './events.js';
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
    this.element.querySelector(".details").setAttribute("data-json", JSON.stringify(content));
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
    card.addEventListener('click', events.Card_click );
    card.addEventListener('dragstart', events.Card_dragstart );
    card.addEventListener('drag', events.Card_drag );
    card.addEventListener('dragenter', events.Card_dragenter );
    card.addEventListener('dragleave', events.Card_dragleave );
    card.addEventListener('dragover', events.Card_dragover );
    card.addEventListener('drop', events.Card_drop );
    card.addEventListener('dragend', events.Card_dragend );
  };
};
