import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { userInfo } from "../types/usertype";

export const useSigninMutation = () => useMutation({
    mutationFn: async ({
        email, password
    }: { email: string, password: string }) => {

        const response = await apiClient.post<userInfo>("/api/user/signin", {
            email, password
        })
        return response.data;
    }
}
)