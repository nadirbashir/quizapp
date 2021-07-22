export const loginHandler = (setLogin) => {
  localStorage.setItem("isLoggedIn", 1);
  setLogin(true);
};

export const logoutHandler = (setLogin) => {
  localStorage.removeItem("isLoggedIn");
  setLogin(false);
};
