import "./view.less";


class TodoView {
    constructor(app, args)
    {
        this.app = app;
        this.render();
    }


    static onClose()
    {
        console.log("Bye!!!");
    }


    render()
    {
        this.workarea = this.app.create("dialog");
        this.workarea.Title = "TODO MVVM";
        this.workarea.Width = 335;
        this.workarea.Height = 195;
        this.workarea.DialogPosition = {at: "center"};
        this.workarea.on("beforeclose", () => this.app.exit());

        this.textfield1 = this.app.create("textfield", this.workarea);
        this.textfield1.Top = 10;
        this.textfield1.Left = 5;
        this.textfield1.Position = "absolute";
        this.textfield1.Text = "";
        this.textfield1.Width = 200;
        this.textfield1.Height = 17;

        this.button1 = this.app.create("button", this.workarea);
        this.button1.Top = 10;
        this.button1.Left = 225;
        this.button1.Position = "absolute";
        this.button1.Caption = "Add TODO";
        this.button1.Width = 100;
        this.button1.Height = 22;

        this.combobox1 = this.app.create("combobox", this.workarea);
        this.combobox1.Top = 40;
        this.combobox1.Left = 10;
        this.combobox1.Position = "absolute";
        this.combobox1.Listbox = true;
        this.combobox1.Width = 315;
        this.combobox1.Height = 110;
        this.combobox1.Items = [];
    }
}


module.exports = TodoView;
