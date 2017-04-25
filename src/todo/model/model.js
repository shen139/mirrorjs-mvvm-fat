import MVVMEmit from "../../utils/emit/emit";


class TodoModel extends MVVMEmit {
    constructor()
    {
        super();
        this.todos = [];
        this.counter = 1;
    }


    addTodo(title)
    {
        const id = this.counter;
        const obj = {id, title};
        this.todos.push(obj);
        this.counter++;

        this.emit("addTodo", obj);
    }


    delTodo(id)
    {
        this.todos.filter(elem => elem.id !== id);

        this.emit("delTodo", {id});
    }
}


module.exports = TodoModel;
