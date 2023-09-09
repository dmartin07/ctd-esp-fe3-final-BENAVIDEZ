import axios from "axios";

export const reducer = (state, action) => {
  const baseURL = `https://jsonplaceholder.typicode.com/users`;

  const getData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data);
        state.data = res.data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  switch (action.type) {
    case "GetDataFromAPI":
      return {
        data: getData(),
      };
    case "ChangeTheme":
      if (state.theme === "light") {
        return {
          theme: "dark",
        };
      } else {
        return {
          theme: "light",
        };
      }

    default:
      return state;
  }
};
