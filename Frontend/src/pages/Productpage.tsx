import { useParams } from "react-router-dom"
import { useGetProductQuery } from "../hooks/productHooks"
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";
import NavbarComponent from "../components/Navbar";


const Productpage = () => {
  const params = useParams()
  const { slug } = params ; 

  const  { data:product , isLoading , error:errorho } = useGetProductQuery(slug!)
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
                      <Button variant="primary">Add to Cart</Button>
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