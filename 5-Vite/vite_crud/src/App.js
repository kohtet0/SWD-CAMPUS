import { addContactFormHandler } from "./app/contact";
import { indexRead } from "./app/indexRead";
import { createContactForm, removeBtn } from "./core/selector";

class App {
  listener() {
    createContactForm.addEventListener("submit", addContactFormHandler);
    indexRead();
    removeBtn.forEach((removeBtn) => {
      console.log(removeBtn)
      removeBtn[0].addEventListener("click", (event) => {
        console.log(event.target)
      })
    })
  }
  init() {
    console.log("App starting");
    this.listener();
  }
}

export default App;
