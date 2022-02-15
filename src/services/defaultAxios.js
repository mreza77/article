import axios from "axios";
import Toast from "react-native-toast-message";

const instance = axios.create();

export const setConfig = () => {
   instance.defaults.baseURL = "https://api.reddit.com/r/programming/"
};

export const axiosSetup = (axiosInstance) => {
   axiosInstance.interceptors.request.use(
      (req) => {
         return req;
      },
      (error) => {
         Toast.show({ type: "error", text2: error })
         return error;
      }
   );

   axiosInstance.interceptors.response.use(
      (res) => {
         return res;
      },
      (error) => {
         Toast.show({ type: "error", text2: error })
         return error;
      }
   );
};

setConfig()
axiosSetup(instance);

const defaultAxios = {
   axiosSetup,
   instance,
};
export default defaultAxios;
