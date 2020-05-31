export const selectAllPages = (state) => state.homepages.pages;

export const selectUsersPage = (id) => (state) =>
  state.homepages.pages.find((page) => page.userId === id);

export const selectPage = (state) => {
  return state.homepages.details;
};

export const selectLoaded = (state) => state.homepages.loaded;
