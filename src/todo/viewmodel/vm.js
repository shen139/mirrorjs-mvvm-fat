import TodoView from "../view/view";
import TodoModel from "../model/model";


class TodoViewModel extends TodoView {
    constructor(app, args)
    {
        super(app, args);
        this.model = new TodoModel();


        // Model events' listeners
        this.model.on("addTodo", params => this.combobox1.addItem(params.id, params.title));
        this.model.on("delTodo", params => this.combobox1.removeItem(params.id));


        // View events' listeners
        this.combobox1.on("change", (combo, key) => this.combobox1.removeItem(key));
        this.button1.on("click", () =>
        {
            this.model.addTodo(this.textfield1.Text);
            this.textfield1.Text = "";
        });
    }
}


module.exports = TodoViewModel;
