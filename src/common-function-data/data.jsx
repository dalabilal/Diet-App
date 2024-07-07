import { USERS } from "./User";
/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const loginUser = (email, password) => {
  const user = USERS.filter(user => user.email === email && user.password === password);
  return user[0] || null;
};

export {
  loginUser
};
