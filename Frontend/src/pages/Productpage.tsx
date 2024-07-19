import { useNavigate, useParams } from "react-router-dom"
import { useGetProductQuery } from "../hooks/productHooks"
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";
import NavbarComponent from "../components/Navbar";
import { useContext } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { convertProductToCartItem } from "../utilis";


const Productpage = () => {
  const params = useParams()
  const { slug } = params ; 

  const  { data:product , isLoading , error:errorho } = useGetProductQuery(slug!)



  const { state, dispatch } = useContext(Store)
  const { cart } = state

  const navigate = useNavigate()

  const addToCartHandler = () => {
    const existItem = cart.cartItems.find((x) => x._id === product!._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (product!.countInStock < quantity) {
      toast.warn('Sorry. Product is out of stock')
      return
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...convertProductToCartItem(product!), quantity },
    })
    toast.success('Product added to the cart')
    navigate('/cart')
  }
  console.log("this is single product", product)
  return (

    isLoading?<LoadingBox/>?errorho:<MessageBox variant="danger">{
      errorho
    }</MessageBox>:!product?<MessageBox variant="danger"> {"No product found"}</MessageBox>:
    <div style={{boxSizing:"border-box"}}>
      <NavbarComponent/>
      <Row>
      <Col md={5}>
      
      <img src={product.image} alt={product.name}  className="large"/>
      </Col>
      <Col md={4}>
      
      <ListGroup variant="flush">
            <ListGroup.Item>
              
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReview={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup></Col>
      <Col md={3}>
      <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
      </Col>
      
      </Row></div>
  )
}

export default Productpage