import { useMutation, useQuery } from "@tanstack/react-query"
import { CartItem, ShippingAddress } from "../types/Cart"
import apiClient from "../apiClient"
import { OrderType } from "../types/Order"

export const useCreateOrderHooks = () => {
    return useMutation({
        mutationFn: async (order: {
            orderItems: CartItem[],
            shippingAddress: ShippingAddress,
            paymentMethod: string
            itemsPrice: number
            shippingPrice: number
            taxPrice: number
            totalPrice: number
        }) => {

            const response = await apiClient.post<{ message: string, order: OrderType }>("/api/orders", order)
            return response.data;
        }
    })

}


export const useGetOrderById = (id: string) => {
    return useQuery({
        queryKey: ["order", id],
        queryFn: async () => {

            const response = await apiClient.get<OrderType>(`api/orders/${id}`)
            return response.data;


        }
    })
}


export const useGetPaypalClientId = () => {
    return useQuery({
        queryKey: ["paylpalClientId"],
        queryFn: async () => {
            const response = await apiClient.get<{ clientId: string }>("api/keys/paypal")
            return response.data
        }
    })
}

export const usePayOrderMutation = () =>
    useMutation({
      mutationFn: async (details: { orderId: string }) =>
        (
          await apiClient.put<{ message: string; order: OrderType }>(
            `api/orders/${details.orderId}/pay`,
            details
          )
        ).data,
    })