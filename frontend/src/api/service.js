import { requests, routes } from "../api/axios";

export const createUser = async (body) => {
  const newUser = await requests.apiPost(routes.user.create, body);
  console.log(newUser);
  return newUser;
};
