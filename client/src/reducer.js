const defaultState = {
  state: "YOUR STATE",


}

function reducer(state=defaultState, action){
  switch (action.type) {
    case "SEARCH":
      return {...state, state: "YOUR STATE"};

    default:
    return state
      // break;
  }
}

export default reducer;