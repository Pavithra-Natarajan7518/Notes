var popup=document.getElementById("add-popup")
var popupoverlay=document.querySelector("#popup-overlay")
var popupcontent=document.getElementById("popup-content")

popup.addEventListener ( "click",function(){
    popupoverlay.style.display="block"
    popupcontent.style.display="block"

})
var cancelButton=document.getElementById("cancel")
cancelButton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupcontent.style.display="none"

})
//select add button,note-content,note-title
var container=document.querySelector(".container")
var addButton=document.getElementById("add")
var noteTitle=document.getElementById("note-title")
var noteContent=document.getElementById("note-content")
addButton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","note-container")
    div.innerHTML=`<h2>${noteTitle.value}</h2>
                   <p>${noteContent.value}</p>
                   <button onclick="DeleteNote(event)">Delete</button>`
                   
    container.append(div)
    popupoverlay.style.display="none"
    popupcontent.style.display="none"
})

function DeleteNote(event)
{
    event.target.parentElement.remove()


}
