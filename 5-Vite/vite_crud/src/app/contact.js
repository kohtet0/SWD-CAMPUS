import { addBtn, createContactForm, lists } from "../core/selector";
import { baseUrl } from "../core/variable";
import { indexRead } from "./indexRead";
import { post } from "./post";

export const addContactFormHandler = (event) => {
  event.preventDefault();

  post();
  indexRead();

  createContactForm.reset();
};
