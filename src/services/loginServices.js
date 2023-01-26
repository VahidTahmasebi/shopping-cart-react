import http from "./httpServices";
// send data to the server
export const loginUser = (data) => {
  return http.post("/user/login", data);
};
