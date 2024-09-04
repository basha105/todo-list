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
                todoItems.splice(i, i);
            }
        }
    }

    const getList = () => todoItems;

    const getListLength = () => listLength;

    return {title, addItem, removeItem, getList, getListLength}
}

export { createList };