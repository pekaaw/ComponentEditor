import {TemplateSelector} from 'TemplateSelector';

let cards = [{
  header: "Harald Blåtann",
  details: "Vikingkonge på 900-tallet. Innførte kristendommen i Danmark."
},{
  header: "Gorm den gamle",
  details: "År 910-958. I følge Jellingsteinen samla Gorm Danmark til eit rike og vart danskane sin første konge."
},{
  header: "Ragnar Lodbrok",
  details: "800-talet. Seilte i 845 til Paris med 5000 mann og tvang frankarane til å betale 7000 pund sølv."
},{
  header: "Erik Raude",
  details: "År 950-1007. Den kjente vikingen - trulig frå Jæren - oppdata Grønland i 982 og vart seinare konge der."
},{
  header: "Bjørn Jernside",
  details: "Svensk vikingkonge som drog på tokt i 859 og var blant dei første vikingane i Middelhavet."
},{
  header: "Svein Tjugeskjegg",
  details: "År 960-1014. Dansk viking som seira i blodig borgerkrig og eurobra store delar av England."
},{
  header: "Harald Hårfagre",
  details: "År 865-933. Samla Noreg og blir rekna som Noregs grunnleggjar."
},{
  header: "Leiv Eiriksson",
  details: "Norskætta viking som segla frå Grønland til Amerika rundt 500 år før Kristoffer Columbus."
},{
  header: "Rollo",
  details: "År 846-932. Vikinghøvding som herja så fælt i Frankrike at fienden gav han Normandie."
},{
  header: "Knut den mektige",
  details: "År 1016-1035. Konge av Danmark, England og Noreg - og kalt Anglo-Skandinavia eller Nordsjø-emperiet."
}];

let root = document.createElement("div", { class: "application"});
root.appendChild(new TemplateSelector(cards).element);
document.body.appendChild(root);

var textContent = "";

var textarea = document.body.querySelector("#myText");
textarea.addEventListener('drop', function(e) {
  // console.log(e);
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  var textarea = e.target;
  // console.log(document.getSelection());
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;
  var str1 = textarea.value.substring(0, start);
  var str2 = textarea.value.substring(start, textarea.value.length);
  // console.log(start);
  var div = document.createElement('div');
  div.innerHTML = e.dataTransfer.getData('text/plain');
  var newValue = div.querySelector(".details").getAttribute("data-json");
  textContent = newValue;
  this.value = str1 + div.querySelector(".details").getAttribute("data-json") + str2;
  return false;
});

// document.addEventListener('dragend', function(e) {
//   console.log(e);
//
//   var text = document.querySelector('#myText');
//   console.log(text);
// });

// function endEvent(e) {
//   console.log(e);
// };
//
// textarea.addEventListener('mouseup', endEvent);
// textarea.addEventListener('touchend', endEvent);
// textarea.addEventListener('focus', function(e) { console.log(e); });

// textarea.addEventListener('mousemove', function(e) { console.log(e); });

textarea.addEventListener('dragover', function(e) {
  // if (e.preventDefault) e.preventDefault();
  var target = e.target;
  //target.focus();
  // console.log(target.selectionStart);
  e.dataTransfer.dropEffect = 'move';
  return true;
});
