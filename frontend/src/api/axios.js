import axios from "axios";

const baseUrl = "http://localhost:3001";

export const routes = {
  user: {
    create: "/user/create",
    loginV1: "/user/login-v1",
    find: "/user/find",
  },
  project: {
    create: "/project/create",
    findAll: "/project/find-all",
    modify: "/project/modify",
    remove: "/project/remove",
  },
  task: {
    create: "/task/create",
    findAll: "/task/find-all",
    modify: "/task/modify",
    remove: "/task/remove",
  },
};

const fullUrl = (route) => `${baseUrl}${route}`;

export const requests = {
  apiGet: (route, params = {}) =>
    axios.get(fullUrl(route), { params }).then((response) => response.data),

  apiPost: (route, body) =>
    axios.post(fullUrl(route), body).then((response) => response.data),

  apiPut: (route, body) =>
    axios.put(fullUrl(route)).then((response) => response.data),

  apiDelete: (route, params) =>
    axios.delete(fullUrl(route), { params }).then((response) => response.data),
};
