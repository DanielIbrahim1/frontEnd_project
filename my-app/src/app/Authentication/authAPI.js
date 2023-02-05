import axios from "axios";
const REGISTER_URL = "https://back-project.onrender.com/register/";
const LOGIN_URL = "https://back-project.onrender.com/login/";
const REFRESH_URL = "https://back-project.onrender.com/login/refresh/";

export function register(User_Details) {
  return new Promise((resolve) =>
    axios
      .post(REGISTER_URL, User_Details)
      .then((res) => resolve({ data: res.data }))
  );
}

export function login(User_Details) {
  console.log(User_Details.refresh);
  if ("username" in User_Details) {
    return new Promise((resolve) =>
      axios
        .post(LOGIN_URL, User_Details)
        .then((res) => resolve({ data: res.data }))
    );
  } else {
    // console.log(User_Details);
    return new Promise((resolve) =>
      axios
        .post(REFRESH_URL, User_Details)
        .then((res) => resolve({ data: res.data }))
    );
  }
}
