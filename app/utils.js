export function TextToHtml(text) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = text;
  return wrapper.childNodes;
}

export function TextToHtmlFragment(text) {
  var node = document.createDocumentFragment();
  let parsed = new DOMParser().parseFromString(text, "text/html");
  parsed.body.childNodes.forEach(child => {
    node.appendChild(child);
  });
  return node;
}
