import { axiosClient } from "./Axios";

export const getClients = () => {
    return axiosClient().get("/customers");
}

export const addNotAppUser = (data: any) => {
    return axiosClient().post("/addUser", data);
}





