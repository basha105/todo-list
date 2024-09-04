import "./styles.css"
import { createTodo } from "./createTodo.js";
import { createList } from "./createList.js";

let defaultList = createList("default");

let waterLawn = createTodo("lawn");

defaultList.addItem(waterLawn);



