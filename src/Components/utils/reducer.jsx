export const reducer = (state, action) => {
  switch (action.type) {
    case "GetDataFromAPI_LOADING":
      return { ...state, loading: true, error: null };
    case "GetDataFromAPI_SUCCESS":
      return { ...state, data: action.payload, loading: false, error: null };
    case "GetDataFromAPI_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "ChangeTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};
