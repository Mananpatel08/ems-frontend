import apiClient from "./apiClient";

export default class AuthService {
    async login(data: { email: string; password: string }) {
        const response = await apiClient.post<LoginResponse>("user/login/", data);
        return response.data;
    }
}