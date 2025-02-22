import { ReactNode } from "react"
import { Alert } from "react-bootstrap"
const MessageBox = ({
    variant="info",
    children
}:{
variant?:string,
children:ReactNode
}) => {
  return <Alert variant= {variant  || "info"}>
    {children}
  </Alert>
}

export default MessageBox