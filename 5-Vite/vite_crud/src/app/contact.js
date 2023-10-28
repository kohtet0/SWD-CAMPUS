import { createContactForm } from "../core/selector";
import { baseUrl } from "../core/variable";

export const addContactFormHandler = async (event) => {
  event.preventDefault();
  const formData = new FormData(createContactForm);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: formData.get("name"),
    phone: formData.get("number"),
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch(`${baseUrl}/contacts`, requestOptions);
  const data = await res.json();

  createContactForm.reset();

  const div = document.createElement("div")
  div.classList()
};
