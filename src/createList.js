function createList(myTitle) {
    const title = myTitle;
    let todoItems = [];
    let listLength = 0;

    const addItem = (newItem) => {
        todoItems[listLength] = newItem;
        listLength++;
    }

    const removeItem = (selectedItem) => {
        for (let i=0; i<listLength; i++) {
            if (selectedItem === todoItems[i]) {
                todoItems.splice(i, 1);
                listLength--;
            }
        }
    }

    const getList = () => todoItems;

    const displayItems = () => {
        console.log(`${title}'s items:`)
        for (let i=0; i<listLength; i++) {
            console.log(todoItems[i].title);
        }
    }

    const getListLength = () => listLength;



    return {title, addItem, removeItem, getList, displayItems, getListLength}

}

export { createList };