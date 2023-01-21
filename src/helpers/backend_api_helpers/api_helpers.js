// import axios from "axios";
// const API_URL = "https://chat-app-backend-9pfz.onrender.com/api/v1";

// // default
// axios.defaults.baseURL = API_URL;
// // content type
// axios.defaults.headers.post["Content-Type"] = "application/json";

// // content type
// const token = JSON.parse(sessionStorage.getItem("authUser"))
//   ? JSON.parse(sessionStorage.getItem("authUser")).token
//   : null;
// if (token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// // intercepting to capture errors
// axios.interceptors.response.use(
//   function (response) {
//     return response.data ? response.data : response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     let message;
//     switch (error.status) {
//       case 500:
//         message = "Internal Server Error";
//         break;
//       case 401:
//         message = "Invalid credentials";
//         break;
//       case 404:
//         message = "Sorry! the data you are looking for could not be found";
//         break;
//       default:
//         message = error.message || error;
//     }
//     return Promise.reject(message);
//   }
// );
// /**
//  * Sets the default authorization
//  * @param {*} token
//  */
// const setAuthorization = (token) => {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + token;
// };

// class APIClient {
//   get = (url, params) => {
//     let response;

//     let paramKeys = [];

//     if (params) {
//       Object.keys(params).map((key) => {
//         paramKeys.push(key + "=" + params[key]);
//         return paramKeys;
//       });

//       const queryString =
//         paramKeys && paramKeys.length ? paramKeys.join("&") : "";
//       response = axios.get(`${url}?${queryString}`, params);
//     } else {
//       response = axios.get(`${url}`, params);
//     }

//     return response;
//   };

//   create = (url, data) => {
//     return axios.post(url, data);
//   };

//   update = (url, data) => {
//     return axios.patch(url, data);
//   };

//   put = (url, data) => {
//     return axios.put(url, data);
//   };

//   delete = (url, config) => {
//     return axios.delete(url, { ...config });
//   };
// }
// const getLoggedinUser = () => {
//   const user = sessionStorage.getItem("authUser");
//   if (!user) {
//     return null;
//   } else {
//     return JSON.parse(user);
//   }
// };

// export { APIClient, setAuthorization, getLoggedinUser };
