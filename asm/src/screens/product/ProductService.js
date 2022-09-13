import axiosInstance from "../../utils/axios";
import constants from "../../utils/constants";

export const getProduct = async () => {
    const res = await axiosInstance.get(constants.API_PRODUCTS);
    console.log("ProductSever >>>> onGetProducts >>>> res : ", res) 
    return res;
}

export const getProductById = async (id) => {
    const res = await axiosInstance.get(`${constants.API_PRODUCTS}/${id}/detail`);
    return res;
}
export const getFavorit = async (user_id) => {
    const res = await axiosInstance.get(`${constants.API_PRODUCTS}/${user_id}/favorit`);
    return res;
}
export const addFavorit = async (data) => {
    const res = await axiosInstance.post(`${constants.API_PRODUCTS}/favorit`, data);
    return res;
}