import http from "./httpServices";
// send data to the server
export const signupUser = (data) => {
  return http.post("/user/register", data);
};
