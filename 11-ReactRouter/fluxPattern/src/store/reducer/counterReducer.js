const initialState = 0;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase":
      if (action.payload) {
        return (state += action.payload);
      } else {
        return (state += 1);
      }
      break;

    case "decrease":
      if (action.payload) {
        if (state > 0 && state >= action.payload) {
          return (state -= action.payload);
        } else {
          return state;
        }
      } else {
        if (state > 0) {
          return (state -= 1);
        } else {
          return state;
        }
      }

    default:
      return state;
      break;
  }
};

// const initialState = 0;

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increase":
//       if (action.payload) {
//         return (state += action.payload);
//       } else {
//         return (state += 1);
//       }
//       break;

//     case "decrease":
//       if (state > 0) {
//         if (action.payload) {
//           return (state -= action.payload);
//         } else {
//           return (state -= 1);
//         }
//       } else {
//         return state;
//       }
//       break;

//     default:
//       return state;
//       break;
//   }
// };

// export default reducer;
