import AuthService from "@/services/authService";
import { useMutation } from "@tanstack/react-query"


export const useLogin = () => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: (data: { email: string; password: string }) =>
            new AuthService().login(data),
    });
};