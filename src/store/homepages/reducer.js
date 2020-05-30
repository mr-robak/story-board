const initialState = { loading: true, pages: [], details: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case "PAGES_LOADING":
      return { ...state, loading: true };

    case "PAGES_FETCHED":
      console.log("PAGES_FETCHED", action.payload);
      const homepages = action.payload;
      // console.log(" homepages", homepages);
      console.log("state.pages", state.pages);
      // const newTest = [...state.pages];
      const newState1 = {
        ...state,
        pages: [...homepages],
        details: { ...state.details },
        loading: false,
      };
      // newTest.length === 0
      //   ? {
      //       ...state,
      //       pages: [...homepages],
      //       details: [...state.details],

      //       loading: false,
      //     }
      //   : state;
      console.log(" newState1", newState1);
      return newState1;
    case "DETAILS_PAGE_FETCHED":
      // console.log("pageAndStories", action.payload);
      const pageAndStories = action.payload;

      // const newPages = [...state.pages].reduce((allPages, page) => {
      // console.log(page.id === pageAndStories.id);
      //   if (page.id === pageAndStories.id) {
      //     return [...allPages, pageAndStories];
      //   } else {
      //     return [...allPages, page];
      //   }
      // }, []);
      // console.log("newPages", newPages);
      // const homePgId = pageAndStories.id;

      const newState2 = {
        ...state,
        details: pageAndStories,
        loading: false,
      };
      // newPages.length === 0
      //   ? { pages: [pageAndStories], loading: false }
      //   : { pages: newPages, loading: false };
      console.log("newState2!!!!!!!!!", newState2);

      return newState2;

    default:
      return state;
  }
};
