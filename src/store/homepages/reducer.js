const initialState = { loading: true, pages: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "PAGES LOADING":
      return { ...state, loading: true };

    case "PAGES FETCHED":
      console.log(action.payload);

      const homepages =
        action.payload.length > 1 ? [...action.payload] : action.payload;
      //   const homepages = action.payload;
      return { ...state, pages: homepages, loading: false };

    default:
      return state;
  }
};
