import {Card} from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './rating'
import '../style/index.css'

const Products = ({product}) => {
    
  return (
    <Card className='bg-light p-3 shadow rounded d-flex flex-fill h-100 cardContainer'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" />  {/* variant can be top or bottom we will experiment both */}
                
        </Link>

        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
                <strong> {product.name} </strong>
            </Card.Title>
            </Link>
    
        <Card.Text as="div">
            <Rating actualRating={product.rating} text={`${product.numReviews} reviews`}/>
             
        </Card.Text>
        <Card.Text as="h3">
            ${product.price}
        </Card.Text>
        </Card.Body>


    </Card>


  )
}

export default Products;