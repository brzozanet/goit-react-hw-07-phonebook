import axios from "axios";

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL = "https://65d1f7f4987977636bfbbb88.mockapi.io/";

export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/contacts");
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
    console.error(`Wystąpił błąd: ${error}, ${error.message}`);
  }
};
