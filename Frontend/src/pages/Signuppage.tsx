/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate , Link} from 'react-router-dom'
import { Store } from '../Store'
import { useSignupMutation } from '../hooks/userHook'
import { toast } from 'react-toastify'
import { getError } from '../utilis'
import { ApiError } from '../types/ApiError'
import { Button, Container, Form } from 'react-bootstrap'

const Signuppage = () => {

    const navigate = useNavigate()
    const  { search} = useLocation()
    const redirectUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectUrl?redirectUrl:"/";
    const [ password , setPassword] = useState("")
    const [ confirmPassword , setConfirmPassword] = useState("")
    const [ name , setName] = useState("")
    const [ email , setEmail] = useState("")

    const { state , dispatch } = useContext(Store)
    const { userInfo} = state ; 


    useEffect(()=>{
      if(userInfo){
          navigate(redirect)
      }
          },[userInfo, navigate , redirect])


const { mutateAsync:signup, isPending} = useSignupMutation()

const submitHandler  = async(e:React.SyntheticEvent)=>{
  e.preventDefault()
  if(password !== confirmPassword){
    toast.error("Password don't match")
    return ; 
  }

  try {
   const data =  await signup({email, password, name})
   dispatch({
    type:"USER_SIGNIN", payload:data
})
localStorage.setItem("userInfo", JSON.stringify(data))
navigate(redirect || "/")
    
  } catch (error) {
    toast.error(getError(error as ApiError))
    
  }


}

          
  return (
    <Container className="small-container">
   
    <h1 className="my-3">Sign Up</h1>
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </Form.Group>

      <div className="mb-3">
        <Button type="submit">Sign Up</Button>
      </div>

      <div className="mb-3">
        Already have an account?{' '}
        <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
      </div>
    </Form>
  </Container>
)
}
export default Signuppage