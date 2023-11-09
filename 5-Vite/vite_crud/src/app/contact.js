import { addBtn, createContactForm } from "../core/selector";
import { post } from "./post";

export const addContactFormHandler = (event) => {
  event.preventDefault();

  post();

  if (createContactForm.children.length > 0) {
    document.getElementById("name").disabled = true;
    document.getElementById("name").classList.add("opacity-50");
    document.getElementById("number").disabled = true;
    document.getElementById("number").classList.add("opacity-50");
  }
  // addBtn.className =
  //   "addBtn h-10 rounded-full bg-neutral-500 text-white font-bold flex justify-center items-center gap-1 cursor-progress";
  addBtn.classList.add("cursor-progress");
  addBtn.innerText = "Adding Contact...";

  setTimeout(() => {
    createContactForm.reset();
    addBtn.classList.remove("cursor-progress");
    window.location.reload();
  }, 3000);
};
