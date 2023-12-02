import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://backend-medical-camp-management-full-project-12.vercel.app",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
