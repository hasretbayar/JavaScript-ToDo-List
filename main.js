let btnDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let inputDOM = document.querySelector("#task");
let ullength = document.getElementsByTagName("li");

for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check;
}

btnDOM.addEventListener('click', elemanEkle)  

function check(){
  this.classList.toggle("checked"); 
}

function removeButton(){
  this.parentElement.remove();
}

function elemanEkle() {
 
    if (inputDOM.value == "")  { 
    $(".error").toast("show");
    
  } 
  
  else {
    $(".success").toast("show") ;

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    inputDOM.value = "";

         liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");

}
}    
inputDOM.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("liveToastBtn").click();
    }
  });






 