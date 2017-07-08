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

let root = document.createElement("div", { class: "application"});
root.appendChild(new TemplateSelector(cards).element);
document.body.appendChild(root);

var textarea = document.body.querySelector("#myText");
textarea.addEventListener('drop', function(e) {
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  this.value = e.dataTransfer.getData('text/plain');
  return false;
});
