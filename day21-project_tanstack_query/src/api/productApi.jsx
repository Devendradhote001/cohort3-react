import { axiosInstance } from "../config/axiosInstance";

export let getProductsDataApi = async () => {
  try {
    console.log("api call function running..");
    let res = await axiosInstance.get("/products");
    console.log(res);
    return res.data.products;
  } catch (error) {
    console.log("error in products api", error);
  }
};
