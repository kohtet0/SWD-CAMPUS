// selectors

const app = document.querySelector("#app");
const dataInput = document.querySelector("#dataInput");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneTotal = document.querySelector("#doneTotal");
const listTotal = document.querySelector("#listTotal");
const lists = document.querySelector(".lists");
const listAllDone = document.querySelector("#listAllDone");

// function

// for done list
const doneList = () => {
  // count done
  let doneCount = document.querySelectorAll(".form-check-input:checked").length;
  // ui update
  doneTotal.innerText = doneCount;
  return doneCount;
};

// for all list count
const countList = () => {
  // count list
  let listCount = document.querySelectorAll(".list").length;
  // ui update
  listTotal.innerText = listCount;
  return listCount;
};

// for dynamic id
let listIndex = 0;
/* let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result; */

// for create list
const createList = (text) => {
  const list = document.createElement("div");
  list.className = "list";

  // for dynamic id
  let randomId = "list" + listIndex++;

  // list create
  list.innerHTML = `
    <div class="border border-2 mb-2 p-3 d-flex justify-content-between align-items-center animate__animated animate__zoomInLeft">
        <div class="form-check mb-0">
            <input
            type="checkbox"
            name=""
            id="${randomId}"
            class="form-check-input"
            />
            <label class="form-check-label" for="${randomId}"
            >${text}</label
            >
        </div>
        <div class="controls">
            <button class="btn btn-sm btn-primary list-edit-btn">
            <i class="bi bi-pencil pe-none"></i>
            </button>
            <button class="btn btn-sm btn-primary list-del-btn">
            <i class="bi bi-trash3 pe-none"></i>
            </button>
        </div>
    </div>
  `;

  // for editBtn
  const listEditBtn = list.querySelector(".list-edit-btn");
  const label = list.querySelector(".form-check-label");

  listEditBtn.addEventListener("click", () => {
    // selector
    const input = document.createElement("input");

    // create input
    input.className = "form-control p-0 m-0";
    input.value = label.innerText;

    // label append
    label.innerHTML = null;
    label.append(input);

    // for focus cursor
    input.focus();

    // input event
    input.addEventListener("blur", () => {
      label.innerText = input.value;
    });
  });

  // for checklist
  const check = list.querySelector(".form-check-input");
  check.addEventListener("click", () => {
    doneList();

    // for edit disable
    listEditBtn.toggleAttribute("disabled");

    // for line through
    label.classList.toggle("text-decoration-line-through");
  });

  // for delBtn
  const listDelBtn = list.querySelector(".list-del-btn");
  listDelBtn.addEventListener("click", () => {
    if (confirm("Are you sure delete list:")) {
      // for del animation
      list.children[0].classList.replace(
        "animate__zoomInLeft",
        "animate__zoomOutRight"
      );
      list.children[0].addEventListener("animationend", () => {
        list.remove();
        doneList();
        countList();
      });
    }
  });

  return list;
};

// process

// for addList
formForList.addEventListener("submit", (e) => {
  e.preventDefault();
  lists.append(createList(textInput.value));
  textInput.value = null;
  countList();
});

// for all done
listAllDone.addEventListener("click", () => {
  const allList = document.querySelectorAll(".list");
  allList.forEach((list) => {
    list.querySelector(".form-check-input").click();
  });
});

// addBtn.addEventListener("click", () => {
//   lists.append(createList(textInput.value));
//   textInput.value = null;
//   // doneList(); no need
//   countList();
// });

// textInput.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     lists.append(createList(textInput.value));
//     textInput.value = null;
//     countList();
//   }
// });
