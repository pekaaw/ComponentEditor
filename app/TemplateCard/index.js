// TemplateCard/index.js
import css from './style.css';
import html from './template.html';
const utils = require("./../utils.js");

const _template = utils.TextToHtmlFragment(require("./template.html"));




let container = _template.querySelector("template-selector");
// VerticalCardScroller.appendTo(container);

export function appendTo(root) {
  root.appendChild(template);
};

export function get(content) {
  var template = _template.cloneNode(true);

  let header = template.querySelector("header");
  header.innerText = content.header;
  template.querySelector(".details").innerText = content.details;
  return template;
};
