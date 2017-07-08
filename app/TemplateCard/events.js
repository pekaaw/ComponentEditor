let sourceElement = null;

export function Card_click(e) {
  console.log(e);
}

export function Card_dragstart(e) {
  this.style.opacity = '0.4';
  sourceElement = this;
  e.dataTransfer.effectAllowed = 'copyMove';
  e.dataTransfer.setData('text/plain', this.querySelector(".details").getAttribute("jsonValue"));
}

export function Card_drag(e) {
  // console.log(e);
}

export function Card_dragenter(e) {
  // console.log(e);
}

export function Card_dragleave(e) {
  // console.log(e);
}

export function Card_dragover(e) {
  if (e.preventDefault) e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

export function Card_drop(e) {
  if (e.stopPropagation) e.stopPropagation();

  if (sourceElement != this) {
    sourceElement.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

export function Card_dragend(e) {
  this.style.opacity = '1.0';
}
