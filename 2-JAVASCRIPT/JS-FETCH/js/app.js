// console.log("Hello World! Debug start!");

// try {
//   const x = 1;
//   x = 10;
// } catch (error) {
//   console.dir(error);

//   console.dir(error.message);

//   console.dir(error.stack);
// } finally {
//     console.log("Wow! Now I can see another debug!")
// }

// const fetchAll = async () => {
//   const data1 = await fetch("https://fakestoreapi.com/products/1");
//   const res1 = await data1.json();
//   console.log(res1);
// };

// fetchAll();


document.querySelector("#bat").addEventListener("click", async () => {
    const bat = await navigator.getBattery()
    console.dir(bat.level)
})