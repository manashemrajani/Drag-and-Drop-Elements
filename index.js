function dragStart(ev) {
   ev.dataTransfer.effectAllowed = 'move';
   ev.dataTransfer.setData("task", ev.target.id);
   ev.dataTransfer.setDragImage(ev.target, 0, 0);
   return true;
}
function dragEnter(ev) {
   event.preventDefault();
   return true;
}
function dragOver(ev) {
   return false;
}
function dragDrop(ev) {
   var src = ev.dataTransfer.getData("task");
   // let newLi = document.createElement("li");
   // newLi.addEventListener("dragstart",dragStart);
   // newLi.setAttribute("draggable",true);
   // newLi.innerText = src;
   // ev.target.closest("ul").appendChild(newLi);
   ev.target.closest("ul").appendChild(document.getElementById(src));
   ev.stopPropagation();
   return false;
}