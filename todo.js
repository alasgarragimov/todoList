const todoInput = document.querySelector("#todoInput");
const todoBtn = document.querySelector("#todoBtn");
const todoList = document.querySelector("#todoList");

let data = [];

todoBtn.addEventListener('click', () => {

    let value = todoInput.value;
    data.push(value);
    todoInput.value = ""
    console.log(data);

    const newListContent = data.reverse().map(function(item, index, list) {
        return `<li class="list-group-item m-1 w-100 " >${item}</li>`
    }).join("");
    todoList.innerHTML = newListContent
    console.log(newListContent);
});