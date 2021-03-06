import apiClient from "../api/apiClient";

export const ProductService = {
    getAllProducts: () => apiClient().get("sanpham"),
    getAllProductsB: () => apiClient().get("product/b"),
    createProduct: (data) => apiClient().post("product/", data),
    getSingleProduct: (id) => apiClient().get(`sanpham/${id}`),

    getImagesProduct: (id) => apiClient().get(`/product/${id}/list-image`),
    deleteProduct: (productId) => apiClient().delete(`/product/${productId}`),
    editProduct: (id, data) => apiClient().put(`/product/${id}`, data),

    getProductByManufactureId: (id) => apiClient().get(`product/manufacture=${id}`),
    getProductByCategory: (id) => apiClient().get(`sanpham-theotheloai/${id}`),
    getFeatureProduct: () => apiClient().get("spbanchay"),
    getNewProduct: () => apiClient().get("sanphammoi")
}