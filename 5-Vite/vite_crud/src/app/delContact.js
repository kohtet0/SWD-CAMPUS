import { baseUrl } from "../core/variable";

export const listsDelHandler = async (event) => {
  if (event.target.classList.contains("removeBtn")) {
    const currentList = event.target.closest(".list");
    const currentListId = currentList.getAttribute("contact-id");
    currentList.classList.add("opacity-20")

    const requestOptions = {
      method: "DELETE",
    };

    fetch(`${baseUrl}/contacts/${currentListId}`, requestOptions).then(
      (response) => {
        if (response.status === 204) {
          currentList.remove();
        }
      }
    );
  }
};
