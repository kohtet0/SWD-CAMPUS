// console.log("create elements");

// // h1 element

// const h1 = document.createElement("h1");
// h1.innerText = "min ga lar par";

// const p = document.createElement("p");
// p.innerHTML = "san kyi tr <b> hello world! </b>";

// document.body.append(h1);
// document.body.append(p);
// document.body.append(ul);

// // const img = document.createElement("img")
// // img.innerHTML = ""

// // const li1 = document.createElement("li");
// // li1.innerText = "apple";
// // const li2 = document.createElement("li");
// // li1.innerText = "orange";
// // const li3 = document.createElement("li");
// // li1.innerText = "mango";

// // ul.append(li1);
// // ul.append(li2);
// // ul.append(li3);

// const ul = document.createElement("ul");

// const createLi = (text) => {
//   const li = document.createElement("li");
//   li.innerText = text;
//   return li;
// };

// ul.append(createLi("apple"));

// const fruits = ["apple", "orange", "mango", "banana"]

// fruits.forEach(fruits => ul.append(createLi(fruit)))

const app = document.querySelector("#app");

const h1 = document.createElement("h1");
h1.innerText = "Product Lists";

app.append(h1);

const img = document.createElement("img")
img.src = "./img/download.jpeg"
img.classList.add("m-2", "rounded-4", "shadow")

app.append(img)
