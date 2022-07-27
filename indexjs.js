console.log("SHASHANK S");
showNotes();
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
   let addTitle=document.getElementById("addTitle");
    let notes=localStorage.getItem("notes");
    let notesObj;
    if(notes==null)
   {notesObj=[];}
   else
   {notesObj=JSON.parse(notes);}

   let myobj={
     title:addTitle.value,
     text:addTxt.value
   }
   notesObj.push(myobj);
   localStorage.setItem("notes",JSON.stringify(notesObj));
   addTxt.value="";
   addTitle.value="";
   console.log(notesObj);
   showNotes();
})
function showNotes(){
    let notes=localStorage.getItem("notes");
    let notesObj;
    if(notes==null)
     {notesObj=[];}
     else{
    notesObj=JSON.parse(notes);
     }
     let html="";
     notesObj.forEach(function(element,index) {
         html+=`  <div class=" noteCard card mx-2 my-2 " style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title"> ${element.title}</h5>
           <p class="card-text">${element.text}</p>
           <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
         </div>
       </div>
         `
     });
     let noteselm = document.getElementById('notes');
     if(notesObj.length!=0)
    {noteselm.innerHTML=html;}
    else{
        let m="PLEASE USE THE ABOVE TEXT AREA TO ADD NOTES";
        html+=` <div class=" noteCard card mx-2 my-2 " style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note 0</h5>
          <p class="card-text">${m}</p>
          <button class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
      noteselm.innerHTML=html;
    }
}

function deleteNote(index)
{
    console.log("I am deleting",index);
    let notes=localStorage.getItem("notes");
    let notesObj;
    if(notes==null)
   {notesObj=[];}
   else
   {notesObj=JSON.parse(notes);}
   notesObj.splice(index,1);
   localStorage.setItem("notes",JSON.stringify(notesObj));
   showNotes();
}

let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
  let inputVal=search.value.toUpperCase();
  console.log('Input event fired!',inputVal);
  let noteCards=document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element){
    let cardTxt=element.getElementsByTagName('p')[0].innerText;
    if(cardTxt.includes(inputVal))
    {element.style.display="block";}
    else{
      element.style.display="none";
    }
  })
})