/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Store } from '../Store'
import { useSigninMutation } from '../hooks/userHook'
import { toast } from 'react-toastify'
import { getError } from '../utilis'
import { ApiError } from '../types/ApiError'
import { Button, Container, Form } from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'

const SigninPage = () => {
    const navigate = useNavigate()
    const  { search} = useLocation()
    const redirectUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectUrl?redirectUrl:"/";
    const [ password , setPassword] = useState("")
    const [ email , setEmail] = useState("")

    const { state , dispatch} = useContext(Store)
    const  { userInfo} = state ; 
    const   { mutateAsync:signin , isPending} = useSigninMutation()

    const submit = async(e:React.SyntheticEvent)=>{
        e.preventDefault()

        try {
            const data =  await signin({
                email,
                password
            })
            dispatch({
                type:"USER_SIGNIN", payload:data
            })
            localStorage.setItem("userInfo", JSON.stringify(data))
            navigate(redirect || "/")
            
        } catch (error) {
            toast.error(getError(error as ApiError))
        }

    }


    useEffect(()=>{
if(userInfo){
    navigate(redirect)
}
    },[userInfo, navigate , redirect])
  return (
    <Container className="small-container">
   
    <h1 className="my-3">Sign In</h1>
    <Form onSubmit={submit}>
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
      <div className="mb-3">
        <Button disabled={isPending} type="submit">
          Sign In
        </Button>
        {isPending && <LoadingBox />}
      </div>
      <div className="mb-3">
        New customer?{' '}
        <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
      </div>
    </Form>
  </Container>
)
}  


export default SigninPage