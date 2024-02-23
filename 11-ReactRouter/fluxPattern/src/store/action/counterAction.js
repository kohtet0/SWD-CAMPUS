export const increase = (arg) => {
  return {
    type: "increase",
    payload: arg,
  };
};

export const decrease = (arg) => {
  return {
    type: "decrease",
    payload: arg,
  };
};

// export const increase = (arg) => {
//   return {
//     type: "increase",
//     payload: arg,
//   };
// };

// export const decrease = (arg) => {
//   return {
//     type: "decrease",
//     payload: arg,
//   };
// };
