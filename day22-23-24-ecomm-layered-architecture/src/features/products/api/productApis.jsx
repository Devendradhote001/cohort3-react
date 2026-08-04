import { api } from "../../../config/api";

export const getAllPRoductApi = async (search) => {
  try {
    let url = search ? `/products/search?q=${search}` : "/products?limit=100";

    let res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log("error in getting all products api", error);
  }
};

export const getProductsCategories = async () => {
  try {
    let res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("error in getting all products api", error);
  }
};

export const getProductByCategory = async (category) => {
  try {
    let res = await api.get(`/products/category/${category}`);
    return res.data;
  } catch (error) {
    console.log("error in getting all products api", error);
  }
};
