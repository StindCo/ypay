import { axiosClient } from "./Axios";

export const getOrders = () => {
    return axiosClient().get("/commands");
}


export const getOrder = (id: any) => {
    return axiosClient().get("/my-orders/" + id);
}







