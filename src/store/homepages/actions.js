import { apiUrl } from "../../config/constants";
import axios from "axios";

export const pagesLoading = () => ({ type: "PAGES_LOADING" });
export const pagesFetched = (data) => ({
  type: "PAGES_FETCHED",
  payload: data,
});
export const pageFetched = (data) => ({
  type: "DETAILS_PAGE_FETCHED",
  payload: data,
});

export const fetchHomepages = async (dispatch, getState) => {
  try {
    dispatch(pagesLoading());
    const response = await axios.get(apiUrl);
    // console.log("fetch response data:", response);
    dispatch(pagesFetched(response.data));
  } catch (error) {
    console.log(error);
  }
};

export function fetchPageWithStories(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(pagesLoading());
      const response = await axios.get(`${apiUrl}/homepages/${id}`);
      console.log("fetch response data:", response.data);
      dispatch(pageFetched(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
