import { useQuery } from "@tanstack/react-query"
import apiClient from "../apiClient"
import { Product } from "../types/Product"

export const useGetProductsQuery = ()=>{
    return useQuery({
        queryKey:["products"],
        queryFn:async()=>{
            
                const response =  await apiClient.get<Product[]>("/api/products")
                return response.data
        
        
        }
    })

}