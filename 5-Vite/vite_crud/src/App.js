import { addContactFormHandler } from "./app/contact";
import { createContactForm } from "./core/selector";

class App {
  listener() {
    createContactForm.addEventListener("submit", addContactFormHandler);
  }
  init() {
    console.log("App starting");
    this.listener();
  }
}

export default App;
