const TOKEN_KEY = "jwt";

export const setToken = (token) =>
  // setToken accepts the token as an argument, and adds it to
  // localStorage with the key TOKEN_KEY.
  localStorage.setItem(TOKEN_KEY, token);

// getToken retrieves and returns the value associated with
// TOKEN_KEY from localStorage.
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
