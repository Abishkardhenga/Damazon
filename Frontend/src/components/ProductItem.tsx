import { Product } from '../types/Product'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const ProductItem = ({ product }: {
    product: Product
}) => {
    return <Card>


        <Link style={{ textDecoration: "none" }} to={`/product/${product.slug}`}>
            <img src={product.image} className="product-image"  alt={product.name} />

        </Link>

        <Card.Body>

            <Link style={{ textDecoration: "none" }} to={`/product/${product.slug}`}>
                <Card.Title>
                    {product.name}</Card.Title>
            </Link>

            <Rating rating={product.rating} numReview={product.numReviews} />
            <Card.Text>
                $
                {
                    product.price
                }
            </Card.Text>

            {
                product.countInStock === 0 ? <Button className='light' disabled>
                    Out of Stock
                </Button> : <Button className=''>
Buy Now                </Button>


            }

        </Card.Body>

    </Card>
}

export default ProductItem