import { useQuery } from "@tanstack/react-query"
import apiClient from "../apiClient"
import { Product } from "../types/Product"

export const useGetProductsQuery = ()=>{
    return useQuery({
        queryKey:["products"],
        queryFn:async()=>{
            
                const response =  await apiClient.get<Product[]>("/api/product", { 
                    withCredentials:true
                })
                return response.data
        
        
        }
    })

}


export const useGetProductQuery = (slug:string)=>{

return useQuery({
    queryKey : ["products", slug],
    queryFn: async()=>{

       return (await apiClient.get<Product>(`/api/product/slug/${slug}`)).data
    }


})


}