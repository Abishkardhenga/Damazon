/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from '../Store'
import Checkoutstep from '../components/Checkoutstep'
import { Button, Form } from 'react-bootstrap'

const PaymentMethodPage = () => {
  const navigate = useNavigate()
  const { state, dispatch} = useContext(Store)
  const  { userInfo, cart:{
    shippingAddress, paymentMethod
  }} = state ; 

  const [ paymentMethodName , setPaymentMethodName ] = useState(paymentMethod||"Paypal")



  useEffect(()=>{
if(!shippingAddress.address){
navigate("/shipping")
}
  },[shippingAddress,navigate])


  const submitHandler = (e:React.SyntheticEvent)=>{
    e.preventDefault()
    dispatch({type:"SAVE_PAYMENT_METHOD", payload:paymentMethodName})
    localStorage.setItem("paymentMethod", paymentMethodName)
    navigate("/placeorder")


  }
  return (
    <div>
    <Checkoutstep step1 step2 step3></Checkoutstep>
    <div className="container small-container">
     
      <h1 className="my-3">Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="PayPal"
            label="PayPal"
            value="PayPal"
            checked={paymentMethodName === 'PayPal'}
            onChange={(e) => setPaymentMethodName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="Stripe"
            label="Stripe"
            value="Stripe"
            checked={paymentMethodName === 'Stripe'}
            onChange={(e) => setPaymentMethodName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Button type="submit">Continue</Button>
        </div>
      </Form>
    </div>
  </div>  )
}

export default PaymentMethodPage