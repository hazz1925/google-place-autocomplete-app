import axios from "axios";
import API_KEY from "../config";

export const searchPlace = (inputValue) => async (dispatch) => {
  try {
    // const response = await axios.get(
      // `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
      // {
        // params: {
          // input: inputValue,
          // key: API_KEY,
        // },
      // }
    // );
    const response = {
      data: {
        predictions: [
          {
            name: 'Setia',
          },
          {
            name: 'Ecohill'
          }
        ]
      }
    }
    dispatch({ type: "SEARCH_PLACE_SUCCESS", payload: response.data.predictions });
  } catch (error) {
    dispatch({ type: "SEARCH_PLACE_ERROR", payload: error.message });
  }
};
