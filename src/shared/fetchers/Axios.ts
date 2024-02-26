import axios from "axios";
import { useSelector } from "react-redux";

// let baseUrl: string = "http://127.0.0.1:8000/api";
let baseUrl: string = "https://app.ypay-delivery.com/api";


export const axiosClient = () => {

  // let token = useSelector((state: any) => state.user.token)

  console.log(localStorage.getItem('token'))


  return axios.create({
    baseURL: baseUrl,
    timeout: 40000,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  });
}
