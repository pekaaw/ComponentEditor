// TemplateSelector
import css from './style.css';
import html from './template.html';
import * as VerticalCardScroller from 'VerticalCardScroller';
import {TemplateCard} from 'TemplateCard';

const utils = require('./../utils.js');
const template = utils.TextToHtmlFragment(html);


export class TemplateSelector {
  constructor(content) {
    this.element = template.cloneNode(true);
    content && this.populate(content);
  }

  populate(content) {
    if (Array.isArray(content)) {
      let container = this.element.querySelector("div.container");
      content.forEach(card => {
        if (TemplateCard.prototype.isValidObject(card)) {
          container.appendChild(new TemplateCard(card).element);
        }
      })
      return this.element;
    }
  }
};

//
// let container = template.querySelector("template-selector");
// let frame = container.querySelector(".container");
// // VerticalCardScroller.appendTo(container);
//
//
// export function appendTo(root) {
//
//   let card = new TemplateCard({
//     header: "Jonas",
//     details: "26 år og har sommarjobb på Leikanger. 26 år og har sommarjobb på Leikanger. 26 år og har sommarjobb på Leikanger. 26 år og har sommarjobb på Leikanger. 26 år og har sommarjobb på Leikanger. 26 år og har sommarjobb på Leikanger. "
//   });
//
//   frame.appendChild(card.element);
//   frame.appendChild(new TemplateCard({header: null, content: []}).element);
//
//   cards.forEach(content => {
//     frame.appendChild(new TemplateCard(content).element);
//     // frame.appendChild(Card.get(content));
//   });
//
//
// //  frame.appendChild(document.createElement('template-card-myclass'));
//
//   root.appendChild(container);
// };
