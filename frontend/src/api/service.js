import { requests, routes } from "../api/axios";

export const createUser = async (body) => {
  const newUser = await requests.apiPost(routes.user.create, body);
  return newUser;
};

export const authenticateUser = async (params) => {
  const authResult = await requests.apiGet(routes.user.loginV1, { params });
  return authResult;
};
