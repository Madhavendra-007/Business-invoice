let addNewFieldBtn = document.getElementById("addNewFieldBtn");
addNewFieldBtn.addEventListener("click", AddNewField);

function AddNewField(e) {
  console.log(e);
  let newField = document.createElement("div");
  newField.classList.add("NewEntriesFlex");
  newField.innerHTML = `
  <div class="EntriesFlex">
  <div>
    <span class="tags">Field Name</span>
    <span class="astr">*</span>
    </div>
    <input type="text">
    </div>
    <svg width="12" height="12" viewPort="0 0 12 12" class="crossSvgBtn">
    <line x1="1" y1="11" 
          x2="11" y2="1" 
          stroke="black" 
          stroke-width="2">
          </line>
    <line x1="1" y1="1" 
          x2="11" y2="11" 
          stroke="black" 
          stroke-width="2">
          </line>
</svg>`;
    addNewFieldBtn.parentElement.before(newField)

let removeFieldBtn=newField.lastElementChild;
removeFieldBtn.addEventListener("click",removeField);
function removeField(e){
    removeFieldBtn.parentElement.remove();
}

}


function totext(e){
  console.log(e);
}
