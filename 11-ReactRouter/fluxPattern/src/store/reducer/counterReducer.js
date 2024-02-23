const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase":
      if (action.payload) {
        return (state += action.payload);
      } else {
        return (state += 1);
      }
      break;

    case "decrease":
      if (state > 0) {
        if (action.payload) {
          return (state -= action.payload);
        } else {
          return (state -= 1);
        }
      } else {
        return state;
      }
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
