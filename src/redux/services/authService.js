import apiClient from "../api/apiClient";

export const AuthService = {
    login:  ({ email, password }) => apiClient().post("dangnhap", {EMAIL: email, PASSWORD: password }),
    register:  (data) => apiClient().post("/taikhoan-khachhang", data),
    findAccountByEmal: (email) => apiClient().get(`dangnhap/${email}`)
}

