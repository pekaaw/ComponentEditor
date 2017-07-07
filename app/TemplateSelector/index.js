// TemplateSelector
import * as utils from './../utils.js';
import * as VerticalCardScroller from 'VerticalCardScroller';
import * as Card from 'TemplateCard';

const tpl = utils.TextToHtmlFragment(require("./template.html"));

let cards = [{
  header: "Per Kristian",
  details: "28 år og bur på Leikanger."
},{
  header: "Jonas",
  details: "26 år og har sommarjobb på Leikanger."
}];


let container = tpl.querySelector("template-selector");
// VerticalCardScroller.appendTo(container);


export function appendTo(root) {
  cards.forEach(content => {
    container.appendChild(Card.get(content));
  });
  root.appendChild(container);
};
