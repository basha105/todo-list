import "./styles.css"
import { createTodo } from "./createTodo.js";
import { createList } from "./createList.js";
import { createListDisplay } from "./createListDisplay.js"

const listContainer = document.getElementById("listDisplay");
let navigationContainer = document.getElementById("navigationDisplay");


const createButton = document.getElementById("newList");
createButton.addEventListener("click", function() {
    let newListTitle = prompt("Please enter a title for your list.");
    if (newListTitle) {
        let newList = createList(newListTitle);
        let newListDisplay = createListDisplay(newList);

        let addItemButton = document.createElement("button");
        addItemButton.textContent = "Add Todo";
        addItemButton.addEventListener("click", function() {
            let newTodoTitle = prompt("Please enter your Todo's name.");
            newList.addItem(newTodoTitle);

            let newerDisplay = createListDisplay(newList);
            listContainer.removeChild(newListDisplay);
            listContainer.appendChild(newerDisplay);


        })


        newListDisplay.appendChild(addItemButton);
        listContainer.appendChild(newListDisplay);
        




    }
    else {
        console.log("You didn't enter a title");
    }
})

