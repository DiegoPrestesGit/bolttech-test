import { requests, routes } from "../api/axios";

export const createUser = async (body) =>
  await requests.apiPost(routes.user.create, body);

export const authenticateUser = async (params) => {
  const authResult = await requests.apiGet(routes.user.loginV1, { params });
  return authResult;
};

export const createProject = async (body) =>
  await requests.apiPost(routes.project.create, body);

export const getProjects = async (params) =>
  await requests.apiGet(routes.project.findAll, { params });

export const modifyProject = async (body) =>
  await requests.apiPut(routes.project.modify, body);

export const removeProject = async (params) =>
  await requests.apiDelete(routes.project.remove, { params });
