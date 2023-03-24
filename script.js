let input = document.querySelector(".list-input");
let addBtn = document.querySelector(".add-btn");
let tasks = document.querySelector(".task");

//To add list dynamically
addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("list-item");
    newItem.innerHTML = `
    <p class="list">${input.value}</p>
    <div class="item-btn">
      <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-solid fa-trash"></i>
    </div>
    `;
    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert("Please Enter A Task");
  }
});
// To add list using enter key

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (input.value.trim() != 0) {
      let newItem = document.createElement("div");
      newItem.classList.add("list-item");
      newItem.innerHTML = `
        <p class="list">${input.value}</p>
        <div class="item-btn">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
        </div>
        `;
      tasks.appendChild(newItem);
      input.value = "";
    } else {
      alert("Please Enter A Task");
    }
  }
});

// Dlete item form list
 tasks.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.parentElement.remove();
    }
 })

//Mark as completed
 tasks.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-pen-to-square")){
        e.target.parentElement.parentElement.classList.toggle("completed");
    }
 })
