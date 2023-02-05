import axios from "axios";

const GET_PRODUCT_URL = "https://back-project.onrender.com/getproduct/";
const GET_PRODUCT_URL_per = "https://back-project.onrender.com/getproductper/";
const ADD_PRODUCT_URL = "https://back-project.onrender.com/addproduct/";
const UPDATE_PRODUCT_URL = "https://back-project.onrender.com/updateproduct/";
const DELETE_PRODUCT_URL = "https://back-project.onrender.com/delteproduct/";

export function getProduct(category_id) {
  return new Promise((resolve) =>
    axios(GET_PRODUCT_URL_per + category_id).then((res) =>
      resolve({ data: res.data })
    )
  );
}

export function addProduct(newData, token) {
  console.log(newData);
  return new Promise((resolve) =>
    axios
      .post(ADD_PRODUCT_URL, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => resolve({ data: res.data }))
  );
}

export function updateProduct(newData, id, token) {
  console.log(token);
  return new Promise((resolve) =>
    axios
      .patch(UPDATE_PRODUCT_URL + id, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => resolve({ data: res.data }))
  );
}

export function deleteProduct(id, token) {
  return new Promise((resolve) =>
    axios
      .delete(DELETE_PRODUCT_URL + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => resolve({ data: res.data }))
  );
}
