import "./styles.css"
import { createTodo } from "./createTodo.js";
import { createList } from "./createList.js";
import { createListDisplay } from "./createListDisplay.js"

const listContainer = document.getElementById("listDisplay");


const createButton = document.getElementById("newList");
createButton.addEventListener("click", function() {
    let newListTitle = prompt("Please enter a title for your list.");
    if (newListTitle) {
        let newList = createList(newListTitle);
        let newListDisplay = createListDisplay(newList);
        listContainer.appendChild(newListDisplay);
    }
    else {
        console.log("You didn't enter a title");
    }
})

