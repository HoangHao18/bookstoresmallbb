import apiClient from "../api/apiClient";

export const CategoryService = {
    getAllCategories: () => apiClient().get("theloai"),
    createCategory: ({ name, description }) => apiClient().post("category/", { name, description }),
    deleteCategory: (categoryId) => apiClient().delete(`/category/${categoryId}`),
    getSingleCategory: (categoryId) => apiClient().get(`/category/${categoryId}`),
    editCategory: ({id, name, description }) => apiClient().put(`/category/${id}`, {id, name, description }),
}