const initialState = { loaded: false, pages: [], details: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case "PAGES_LOADING":
      return { ...state, loaded: false };

    case "PAGES_FETCHED":
      // console.log("PAGES_FETCHED", action.payload);
      const homepages = action.payload;
      const newState1 = {
        ...state,
        pages: [...homepages],
        details: { ...state.details },
        loaded: true,
      };

      // console.log(" newState1", newState1);
      return newState1;
    case "DETAILS_PAGE_FETCHED":
      // console.log("pageAndStories", action.payload);
      const pageAndStories = action.payload;
      const newState2 = {
        ...state,
        details: pageAndStories,
        loaded: true,
      };

      // console.log("newState2!!!!!!!!!", newState2);

      return newState2;

    default:
      return state;
  }
};
