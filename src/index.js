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
        listContainer.appendChild(newListDisplay);

        let newListButton = document.createElement("button");
        newListButton.textContent = newListTitle;
        navigationContainer.appendChild(newListButton);

    }
    else {
        console.log("You didn't enter a title");
    }
})

