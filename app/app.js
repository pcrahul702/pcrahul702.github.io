console.log("i am console");
showNotes();
let addbtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});
// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element,index) => {
    html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
  });
  let notesElemnet = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElemnet.innerHTML = html;
  } else {
    notesElemnet.innerHTML = `<p>nothing to show! Add notes</p>`;
  }
}
//function to delete note

function deleteNote(index){
    console.log("i am deleting",index );
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
 showNotes();
}
// search functionality
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputvalue=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
       let cardTxt=element.getElementsByTagName("p")[0].innerText;
       if(cardTxt.includes(inputvalue)){
        element.style.display="block";
       }
       else{
        element.style.display="none";
       }
    })



})
/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 
