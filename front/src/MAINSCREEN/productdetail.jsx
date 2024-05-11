import React from 'react'
// import List from '../list';
import { useEffect,useState } from 'react';
import { useParams} from 'react-router-dom';
import { Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/rating';
import axios from 'axios';




const Productdetail = () => {
  const [product,setProduct]=useState({});


  const {id: productId}=useParams();
  /* The id:product assing name of id as productId */
   
  useEffect(()=>{
    const fetchProduct=async()=>{
      const {data}=await axios.get(`/api/List/${productId}`);
      setProduct(data);
    }
    fetchProduct();
  },[productId])
  
  if (!product) {
    console.log('Product not found');
    return <div>Product not found</div>;
  }
  

  return (
    <>
        <Link className='btn btn-dark my-1' to='/'> Back?</Link>
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid/>
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>{product.name}</h2>
    
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating actualRating={product.rating} text={`${product.numReviews} reviews`}/>
                {console.log(product.rating)}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup>
              <ListGroupItem>Price: ${product.price}</ListGroupItem>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
            
          </Col>
          <Col md={3}>
            <Card>
             <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>
                  Price: 
                  </Col>
                  <Col><strong>{`$ ${product.price}`}</strong>
                  </Col>
                </Row>
                <Row md={4}>
                  <Col md={6}>
                  InStock ? :
                  </Col>      
                  <Col>
                  <strong style={{ color: product.countStock > 0 ? 'green' : 'red' }}>{product.countStock>0 ? "Yes": "No"} </strong>
                  </Col>
                  </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className='btn -block'
                        disabled={product.countStock ===0}
                        type='button'>
                          Click to Buy
            
                
                  </Button>
              </ListGroupItem>
             </ListGroup>
            </Card>
            </Col>
            
  
  

        </Row>
    </>
  )
}

export default Productdetail;