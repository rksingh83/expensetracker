import axios from "axios";
export const service = axios;

export const fetchUsers = () => {
  return service.get("/api/users/get-all-users");
};

export const createUserType = (values) => {
  return service.post("/api/userType/createUserType", {
    ...values,
  });
};

export const fetchUserTypes = () => {
  return service.get("/api/userType/getUserTypes");
};

export const createMyUser = (values) => {
  return service.post("/api/myUser/createMyUser", {
    ...values,
  });
};

export const fetchMyUsers = () => {
  return service.get("/api/myUser/getMyUsers");
};
