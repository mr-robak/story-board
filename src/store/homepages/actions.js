import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";
import { selectUser } from "../user/selectors";

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
    dispatch(appLoading());
    const response = await axios.get(apiUrl);
    // console.log("fetch response data:", response);
    dispatch(pagesFetched(response.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};

export function fetchPageWithStories(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(pagesLoading());
      dispatch(appLoading());

      const response = await axios.get(`${apiUrl}/homepages/${id}`);
      console.log("fetch response data:", response.data);
      dispatch(pageFetched(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
}

export const homePageUpdated = (formData) => ({
  type: "HOMEPAGE_UPDATED",
  payload: { ...formData },
});

export function updateHomePage(formData) {
  // console.log("thunk: updateHomePage");
  return async (dispatch, getState) => {
    try {
      const user = selectUser(getState());

      dispatch(appLoading());

      const response = await axios.patch(
        `${apiUrl}/homepages/${formData.id}`,
        {
          ...formData,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch(homePageUpdated(response.data.homepage));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
}

export const addStory = (story) => ({
  type: "POST_A_STORY",
  payload: { ...story },
});

export function postAStory(formData) {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const user = selectUser(getState());
      // console.log(user);
      const response = await axios.post(
        `${apiUrl}/homepages/${user.homepage.id}`,
        { ...formData },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      // console.log("response.data", response.data);
      dispatch(addStory(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
}
