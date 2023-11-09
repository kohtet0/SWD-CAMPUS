import { addContactFormHandler } from "./app/contact";
import { listsDelHandler } from "./app/delContact";
import { listsEditHandler } from "./app/edit";
import { indexRead } from "./app/indexRead";
import { createContactForm, lists } from "./core/selector";

class App {
  listener() {
    createContactForm.addEventListener("submit", addContactFormHandler);
    indexRead();
    lists.addEventListener("click", listsDelHandler);
    lists.addEventListener("click", listsEditHandler)
  }
  init() {
    console.log("App starting");
    this.listener();
  }
}

export default App;
