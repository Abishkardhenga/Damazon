import { CartItem, ShippingAddress } from "./Cart"
import { UserInfoType } from "./usertype"

export type OrderType = {

_id:string
orderItems:CartItem[]
shippingAddress:ShippingAddress,
paymentMethod:string
user:UserInfoType
createdAt:string
isPaid:boolean
paidAt:string
isDelivered:boolean
deliverdAt:string
itemsPrice:number
shippingPrice:number
taxPrice:number
totalPrice:number
}