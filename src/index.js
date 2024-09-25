import "./styles.css"
import { createTodo } from "./createTodo.js";
import { createList } from "./createList.js";
import { createListDisplay } from "./createListDisplay.js"

const listContainer = document.getElementById("listDisplay");
let defaultList = createList("default");

let washDishes = createTodo("Wash the dishes");
defaultList.addItem(washDishes);

let throwGarbage = createTodo("Throw the garbage");
defaultList.addItem(throwGarbage);

let defaultDisplay = createListDisplay(defaultList);
listContainer.appendChild(defaultDisplay);





