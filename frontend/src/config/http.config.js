import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`,
});


// request Handler
const requestHandler = (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearor ${token}`;
  }
  // Set Content-Type as application/x-www-form-urlencoded
  // config.headers["Content-Type"] = "application/x-www-form-urlencoded";

  return config;
};
// request Error Handler
const requestErrorHandler = (error) => {
  console.log(error);
  return Promise.reject(error);
};

// response Handler
const responseHandler = (response) => {
  return {
    status: response.status,
    data: response.data,
  };
};
// response Error Handler
const responseErrorHandler = (error) => {
  if (!error.response) {
    // toaster.danger(
    //   "Please check your internet connection and then refresh the page"
    // );
  } else {
    console.log("ERR:", error);
    // let response = error.response;
    // if (
    //   response.status == 408
    //   // &&
    //   // response?.data?.message !== "Incorrect Email-Id or Password"
    // ) {
    //   localStorage.removeItem("token");
    //   toaster.danger("Your session are expired.");
    //   setTimeout(() => {
    //     window.location.assign("/");
    //   }, 1000);
    // }
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(requestHandler, requestErrorHandler);
axiosInstance.interceptors.response.use(responseHandler, responseErrorHandler);

export default axiosInstance;
