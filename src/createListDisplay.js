function createListDisplay(currentList) {

    const listContainer = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = `${currentList.title}`;
    listContainer.appendChild(header);

    const list = document.createElement("ul");
    for (let i=0; i<currentList.getListLength(); i++) {
        let newListItem = document.createElement("li");
        newListItem.textContent = currentList.getList()[i].title;
        list.appendChild(newListItem);
    }

    // Make an html list of items, with each item's text content being the title of the todo item

    listContainer.appendChild(list);
    listContainer.style.width = "225px";
    listContainer.style.height = "300px";
    listContainer.classList.add("listContainer");
    return listContainer;
}

export { createListDisplay };