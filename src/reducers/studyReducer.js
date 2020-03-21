const initState = {
  count: 0
};

const globalReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_COUNT": {
      return { ...state, count: action.count };
    }
    default:
      return state;
  }
};

export default globalReducer;
