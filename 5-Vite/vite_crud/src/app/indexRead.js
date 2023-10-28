import { lists } from "../core/selector";
import { baseUrl } from "../core/variable";

export const indexRead = async () => {
  const requestOptions = {
    method: "GET",
  };

  const res = await fetch(`${baseUrl}/contacts`, requestOptions);
  const data = await res.json();

  // let name = "Test";
  // let phone = "09511545";

  data.map((data) => {
    const div = document.createElement("div");
    div.className = "flex flex-row items-center gap-3 ml-3 text-neutral-100";

    lists.append(div);
    div.innerHTML = `
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div class="flex flex-col gap-1">
          <li class="border-b border-neutral-500 pb-1">${data.name}</li>
          <li>${data.phone}</li>
        </div>
    `;
  });
};
