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


// function totext(e){
//   console.log(e);
// }


// ********************************ADD ITEMS ROW***************************************************************
// var idIndex=0;


// var addItemButton=document.getElementById("addItemButton");

// addItemButton.addEventListener("click",addNewItem);

// function addNewItem(rID,qID,tID,aID){
//   rID="rID"+idIndex;
//   qID="qID"+idIndex;
//   tID="tID"+idIndex;
//   aID="aID"+idIndex;
  

  
  
//   idIndex++;
//  let newRow=document.createElement("div");
//   newRow.classList.add("addItemRow");
//   newRow.innerHTML=`
//   <form action="">

//   <input type="text" name="itemName" id="'+pID+'" class="firstItemName itemName" ></input>
//   <input type="number" name="rate" id="'+rID+'" class="firstItemDetails itemDetails"></input>
//   <input type="number" name="quantity" id="'+qID+'" class="firstItemDetails itemDetails"></input>
//   <input type="number" name="tax" id="'+tID+'" class="firstItemDetails itemDetails"></input>
//   <input type="number" name="amount" id="'+aID+'" class="firstItemDetails itemDetails"></input>
//   </form>
//   <svg class="trashCan" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//                     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//                     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//                   </svg>

//   `;

//   addItemButton.parentElement.before(newRow);
//   let trashCan=newRow.lastElementChild;

//   trashCan.addEventListener("click",removeRow);
  
//   function removeRow(e){
//     trashCan.parentElement.remove();
//   }
//   let rate=document.getElementById(rID);
//   let quantity=document.getElementById(qID);
//   let tax=document.getElementById(tID);
//   let amount=document.getElementById(aID);
  
  
//   rate.addEventListener("input",calculateAmount);
//   quantity.addEventListener("input",calculateAmount);
//   tax.addEventListener("input",calculateAmount);
  
//   function calculateAmount(e){
//   var  rateValue=parseInt(rate.value);
//   var  quantityValue=parseInt(quantity.value);
//   var  taxValue=(((parseInt(tax.value))*(quantityValue*rateValue))/100);
//        amount.value=(rateValue*quantityValue)+taxValue;
//   }
  

// }

// *****************************************firstTrashCan Code***********************************************
let firstTrashCan=document.getElementById("firstTrashCan");
firstTrashCan.addEventListener("click",clearData);


function clearData(e){

  firstItemName=document.getElementsByClassName("firstItemName")[0];
  firstItemDetails=document.getElementsByClassName("firstItemDetails")[0];
    firstItemDetails.value="";
  firstItemDetails=document.getElementsByClassName("firstItemDetails")[1];
    firstItemDetails.value="";
  firstItemDetails=document.getElementsByClassName("firstItemDetails")[2];
    firstItemDetails.value="";
  firstItemDetails=document.getElementsByClassName("firstItemDetails")[3];
    firstItemDetails.value="";
  
  firstItemName.value="";


}

// *****************************************CALCULATIONS***********************************************


var rate=document.querySelector(".itemRow")?.firstElementChild.firstElementChild.nextElementSibling;
var quantity=rate.nextElementSibling;
var tax=quantity.nextElementSibling;
var amount=tax.nextElementSibling;


rate.addEventListener("input",calculateAmount);
quantity.addEventListener("input",calculateAmount);
tax.addEventListener("input",calculateAmount);

function calculateAmount(e){
  rateValue=parseInt(rate.value);
  quantityValue=parseInt(quantity.value);
  taxValue=(((parseInt(tax.value))*(quantityValue*rateValue))/100);
  amount.value=(rateValue*quantityValue)+taxValue;
}

// var rate=document.querySelectorAll(".itemRow").firstElementChild.firstElementChild.nextElementSibling;

// rate.forEach((item) =>{
//     item.addEventListener('input',() =>{
//       console.log(rate);
//   });
// })


