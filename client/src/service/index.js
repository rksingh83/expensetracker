import axios from "axios";
export const service = axios;

export const fetchUsers = () => {
  return axios.get("/api/users/get-all-users");
};
