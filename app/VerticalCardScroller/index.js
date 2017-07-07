// VerticalCardScroller
import css from './style.css';
import html from './template.html';
import * as utils from 'utils.js';

const template = utils.TextToHtmlFragment(html);

export function appendTo(root) {
  root.appendChild(template);
};
