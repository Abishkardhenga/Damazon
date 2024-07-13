import { Col, Row } from 'react-bootstrap'

import { Product } from '../types/Product'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { ApiError } from '../types/ApiError'
import  { getError } from "../utilis"
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../hooks/productHooks'


type State  = {
    products : Product[]
    loading:boolean
    error:string
}

type Action = { type:"FETCH_REQUEST"} | { type:"FETCH_SUCCESS", payload:Product[]} | { type:"FETCH_FAILED", payload:string}

const initialState:State = { 
 products : [],
 loading:true , 
 error : ""
}


const reducer = (state:State , action:Action)=>{

    switch(action.type){
case 'FETCH_REQUEST':
    return {...state , loading:true}

    case 'FETCH_SUCCESS' :
    return {...state ,loading:false ,  products:action.payload}


    case 'FETCH_FAILED':
        return {...state ,loading:false , error:action.payload }

        default : 
        return state; 





    }

}

const Homepage = () => {
    const  { data } = useGetProductsQuery()
    console.log("this is product data", data)

    const [ {loading, error, products}, dispatch ] = useReducer<React.Reducer<State , Action>>(reducer , initialState)


    useEffect(()=>{
        const fetchData =  async()=>{

            dispatch({
                type:"FETCH_REQUEST"
            })


            try {
             const result = await   axios.get("/api/products")
             dispatch({
                type:"FETCH_SUCCESS", payload:result.data
             })
            } catch (error) {
                dispatch({
                    type:"FETCH_FAILED", payload:getError(error as ApiError)
                })
                
            }

        }
        fetchData()
        
    },[])
    return (

        loading?<LoadingBox/>:error?<MessageBox variant="danger">{error}</MessageBox>:
        <Row>

            {
                products.map((product) => {
                    return (

                        <Col key={product.slug} sm={6} md={4} lg={3}>
                           <ProductItem product={product}/>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default Homepage