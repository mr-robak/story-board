import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  homepage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case "HOMEPAGE_UPDATED":
      // console.log("HOMEPAGE_UPDATED");

      return {
        ...state,
        homepage: {
          ...state.homepage,
          ...action.payload,
        },
      };
    case "POST_A_STORY":
      // console.log("POST_A_STORY");
      // console.log("action.payload", action.payload);

      return {
        ...state,
        homepage: {
          ...state.homepage,
          stories: [{ ...action.payload }, ...state.homepage.stories],
        },
      };

    default:
      return state;
  }
};
