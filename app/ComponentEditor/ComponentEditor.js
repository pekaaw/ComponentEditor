import {TemplateSelector} from 'TemplateSelector';

let cards = [{
  header: "Per Kristian",
  details: "28 år og bur på Leikanger."
},{
  header: "Jonas",
  details: "26 år og har sommarjobb på Leikanger."
},{
  header: "Per Kristian",
  details: "28 år og bur på Leikanger."
},{
  header: "Jonas",
  details: "26 år og har sommarjobb på Leikanger."
},{
  header: "Per Kristian",
  details: "28 år og bur på Leikanger."
},{
  header: "Jonas",
  details: "26 år og har sommarjobb på Leikanger."
},{
  header: "Per Kristian",
  details: "28 år og bur på Leikanger."
},{
  header: "Jonas",
  details: "26 år og har sommarjobb på Leikanger."
},{
  header: "Per Kristian",
  details: "28 år og bur på Leikanger."
},{
  header: "Jonas",
  details: "26 år og har sommarjobb på Leikanger."
},{
  header: "Per Kristian",
  details: "28 år og bur på Leikanger."
},{
  header: "Jonas",
  details: "26 år og har sommarjobb på Leikanger."
}];
//let root = $('<div class="application"></div>');
let root = document.createElement("div", { class: "application"});
root.appendChild(new TemplateSelector(cards).element);
//TemplateSelector.appendTo(root);
document.body.appendChild(root);


var textarea = document.body.querySelector("#myText");
textarea.addEventListener('drop', function(e) {
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  this.value = e.dataTransfer.getData('text/plain');
  return false;
});

// import TemplateLoader from 'jet-template-loader';
//
// export function render($root) {
//   TemplateLoader.loadText('./html/ComponentEditor.html')
//     .then( content => {
//
//     });
// };


// import { render as templateSelectorRender } from "../TemplateSelector/TemplateSelector.js";
//
// var htmlTemplate,
//     // templateSelector,
//     componentSelector,
//     editorView;
//
// htmlTemplate = require("./ComponentEditor.html");
// var myTpl = $(htmlTemplate);
// var result = templateSelectorRender(myTpl);
// console.log(myTpl);
// // templateSelector = require("TemplateSelector.js");
// // componentSelector = require("ComponentSelector.js");
// // editorView = require("EditorView.js");
//
// var root = $('<div class="application"></div>');
// root.append(myTpl);
//
// $("body").append(root);
