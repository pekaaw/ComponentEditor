// TemplateSelector
import * as utils from './../utils.js';
import * as VerticalCardScroller from 'VerticalCardScroller';

const tpl = utils.TextToHtmlFragment(require("./template.html"));
let container = tpl.querySelector("template-selector");
VerticalCardScroller.appendTo(container);

export function appendTo(root) {
  root.appendChild(tpl);
};
