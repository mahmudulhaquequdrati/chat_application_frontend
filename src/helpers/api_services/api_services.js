import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  }
);

// default
axios.defaults.baseURL = API_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAllConversations = async () => {
  return await axios.get("/conversations/all-conversations");
};

export const getMessagesById = async (id) => {
  return await axios.get(`/messages/all-messages/${id}`);
};

export const getConversationByTag = async (tag) => {
  return await axios.get(`/conversations/all-conversations/${tag}`);
};
