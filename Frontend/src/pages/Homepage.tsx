import { Col, Row } from 'react-bootstrap'


import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../hooks/productHooks'






const Homepage = () => {
    const  { data:products ,isLoading , error:errorho } = useGetProductsQuery()




    return (

        isLoading?<LoadingBox/>:errorho?<MessageBox variant="danger">{ errorho.message}</MessageBox>:
        <Row>

            {
                products!.map((product) => {
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