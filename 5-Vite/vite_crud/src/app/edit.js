import { createContactForm, name } from "../core/selector";

export const listsEditHandler = (event) => {
  if (event.target.classList.contains("editBtn")) {
    const currentList = event.target.closest(".list");
    const currentListId = currentList.getAttribute("contact-id");
    console.log(currentList);
    console.log(currentListId);

    
  }
};
