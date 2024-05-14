import { auth } from "firebase.js";

export const IsLoggedIn = () => {
  const user = auth.currentUser;
  if (user !== null) return user;
};
