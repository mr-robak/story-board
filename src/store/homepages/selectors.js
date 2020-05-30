export const selectAllPages = (state) => state.homepages.pages;

export const selectPage = (state) => {
  return state.homepages.details;
  //   .find(
  //     (page) => page.id === parseInt(id)
  // console.log(page.id, page.id === paramId, paramId)
  //   );
};

export const selectLoading = (state) => state.homepages.loading;
