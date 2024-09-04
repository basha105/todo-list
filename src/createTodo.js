function createTodo(thisTitle) { // This is merely creating a Todo ITEM! not a list
    const title = thisTitle;
    let desc = "No description yet.";
    const dueDate = "January 1, 2025";
    const priority = 0;
    let checked = false;

    const getDesc = () => desc;
    const setDesc = (newDesc) => desc = newDesc;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => checked;
    return {title, getDesc, setDesc, getDueDate, getPriority, getStatus};
    
}

export { createTodo };