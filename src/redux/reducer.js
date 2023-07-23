const initialState = {
  places: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PLACE_SUCCESS":
      return { ...state, places: action.payload, error: null };
    case "SEARCH_PLACE_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
