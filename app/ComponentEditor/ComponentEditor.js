import * as TemplateSelector from 'TemplateSelector';

//let root = $('<div class="application"></div>');
let root = document.createElement("div", { class: "application"});
TemplateSelector.appendTo(root);
document.body.appendChild(root);

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
