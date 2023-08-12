// console.log("standard build in object");

// // const s = new String("Min Ga Lar Par Byar");

// // console.log(s);

// // console.log(s.length);
// // console.log(s[0]);
// // console.log(s[5]);
// // console.log(s.substring(0, 14));

// // console.log(s.search("Min"));

// // console.log(s.replace("Byar", "Taw Thar Tae"));

// // console.log(s.toUpperCase());
// // console.log(s.toLowerCase());

// // console.log(s.trim().length);

// // const x = new String("Hello");

// // console.log(x.padStart(15, "xxx"));
// // console.log(x.padEnd(15, "xxx"));

// // //string to array

// // console.log(s.split(""))
// // console.log(s.split(" "))
// // console.log(s.split("a"))

// // const n = new Number(1994.743536);
// // console.log(n);
// // console.log(typeof n);
// // console.log(n.toString());
// // console.log(n.toFixed(3))
// // console.log(n.toExponential())
// // console.log(typeof n.valueOf())

// // console.log(Number("123"));
// // console.log(Number("123a"));
// // console.log(parseInt("150a5"));

// // console.log(Number("110.135"));
// // console.log(parseInt("110.135"));
// // console.log(parseFloat("110.135"));

// // const obj = {
// //   x: xxx,
// //   y: yyy,
// //   z: zzz,
// // };

// // console.log(obj);
// // console.log(Object.keys(obj));

// const run = function () {
//     return `${x}`
// }

// console.log(typeof run())

// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.join("_"));

// fruits.push("x");

// fruits.unshift("y");

// fruits.pop();

// fruits.shift();
// console.log(fruits);

// fruits.sort();

// console.log(fruits);

// fruits.reverse();

// console.log(fruits);

// for (fruit of fruits) {
//   console.log(fruit);
// }

// function greeting() {
//   return "min ga lar par";
// }

// // console.log(greeting());

// function intro(callback) {
//   console.log(callback());
//   console.log("my name is Ko Htet");
//   return "finished intro"
// }

// console.log(intro(greeting))

// fruits.forEach(function(x){
//     console.log(x.length, x, x.toUpperCase())
// })

// fruits.forEach(function (el, x, arr) {
//   console.log(el, x, arr);
// });

// const run = function() {
//     return "this is run"
// }

// console.log(run())

// const run = name => "I'm " + name;

// console.log(run());

// const run = (birthYear) => {
//   const d = new Date();
//   const currentYear = d.getFullYear();
//   const result = currentYear - birthYear;
//   return "your age is " + result;
// };

// console.log(run(2001));

// console.log(Array.isArray(fruits));

// let x = 5;

// console.log(Array.isArray(x));

// console.log(fruits.includes("apple"))
// console.log(fruits.includes("Apple"))
// console.log(fruits.includes("orange"))

const fruits = ["apple", "orange", "mango", "banana", "lemon", "line", "kiwi"];

// const products = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: { rate: 3.9, count: 120 },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: { rate: 4.1, count: 259 },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: { rate: 4.7, count: 500 },
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     description:
//       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: { rate: 2.1, count: 430 },
//   },
// ];

// console.table(products);

// const result = fruits.map((el) => {
//   console.log(el);
//   return el.toUpperCase();
// });

// console.log(result);

// console.table(products);

// const r = products.map((el) => {
//   el.price += 10;
//   el.title = "Ko Htet " + el.title
//   return el;
// });

// console.table(products);

// console.table(products);

// const r = products.filter((el) => {
// //   return el.id === 10 || el.id === 1 || el.id === 15;

// });

// console.table(r);

// const r = products.map((el) => {
//   return {
//     title: el.title,
//     price: el.price,
//   };
// });

// const r = products.filter((el) => el.price < 50).map((el) => el.title);

// const r = products.find((el) => el.id === 5);

// console.table(r);

const nums = [1, 2, 3, 4, 5];

console.log(
  nums.reduce((pv, cv) => {
    
  })
);
