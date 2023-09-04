import InputForm from "./inputForm.js";
import List from "./lists.js";
import { app } from "./selectors.js";
import TitleUi from "./title.js";

class Todo {
  basicUiRender() {
    //for heading
    const title = new TitleUi("Todo App");
    app.append(title);

    //for input and add btn
    const form = new InputForm();
    app.append(form);

    //for add lists
    const lists = new List();
    app.append(lists);
  }

  init() {
    console.log("Todo App Start");

    this.basicUiRender();

  }
}

export default Todo;
