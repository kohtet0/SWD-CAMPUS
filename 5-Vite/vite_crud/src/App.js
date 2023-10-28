import { addContactFormHandler } from "./app/contact";
import { indexRead } from "./app/indexRead";
import { createContactForm } from "./core/selector";

class App {
  listener() {
    createContactForm.addEventListener("submit", addContactFormHandler);
    indexRead()
  }
  init() {
    console.log("App starting");
    this.listener();
  }
}

export default App;
