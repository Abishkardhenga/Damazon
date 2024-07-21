import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { UserInfoType } from "../types/usertype";

export const useSigninMutation = () => useMutation({
    mutationFn: async ({
        email, password
    }: { email: string, password: string }) => {

        const response = await apiClient.post<UserInfoType>("/api/user/signin", {
            email, password
        })
        return response.data;
    }
}
)



export const useSignupMutation = ()=> useMutation({
    mutationFn:async({
        email , password , name 
    }:{ email:string, password:string, name:string })=>{

      const response =   await apiClient.post<UserInfoType>("/api/user/signup", {
            email , password, name
        })

        return response.data;

    }
});

