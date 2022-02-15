import defaultAxios from "./defaultAxios";

const generateRequest = async (func, args) => {
   return defaultAxios.instance[func](...args);
};

const http = {
   get: (url) => {
      return generateRequest("get", [url]);
   }
};

export default http;
