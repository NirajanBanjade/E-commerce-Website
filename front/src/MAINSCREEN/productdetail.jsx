import React from 'react'
import List from '../list';
import { useEffect,useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { Link} from 'react-router-dom';
import {Form,Row, Col, Image, ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/rating';
import axios from 'axios';
import { useGetProductDetailsQuery } from '../slices/productApislice';
import Loader from '../components/loader';
import Message from '../components/message';
import { addToCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';



const Productdetail = () => {
  // const [product,setProduct]=useState({});


  // const {id: productId}=useParams();
  // /* The id:product assing name of id as productId */
   
  // useEffect(()=>{
  //   const fetchProduct=async()=>{
  //     const {data}=await axios.get(`/api/List/${productId}`);
  //     setProduct(data);
  //   }
  //   fetchProduct();
  // },[productId])
  
  // if (!product) {
  //   console.log('Product not found');
  //   return <div>Product not found</div>;
  // }
  
  let { id: productId } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  
  const dispatch = useDispatch();

  const addToCartHandler=()=>{
    dispatch(addToCart({...product, qty}));
    navigate('/cart');
  }

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId)

  // const addToCartHandler = () => {
  //   navigate(`/cart/${productId}?qty=${qty}`)
  // }

  return (
    <>
      <Link className='btn btn-dark my-1' to='/'> Back?</Link>
      {isLoading ? (
        <Loader/>
      ):error ?(
        <Message variant='danger'>
        {error?.data?.message || error.error}
        </Message>
      ): (
        <>

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
              {product.countStock > 0 && 
              (
                <ListGroupItem>
                  <Row>
                    <Col>
                    Qty
                    </Col>
                    <Col>
                    <Form.Control as='select' value ={qty} onChange = {(e)=>setQty(Number(e.target.value))}>
                      {[...Array(product.countStock).keys()].map((x)=>(
                        <option key ={x+1} value={x+1}>
                          {x+1}
                        </option>
                      ))}
                    </Form.Control>
                    </Col> 
                  </Row>
                </ListGroupItem>
              )}
              <ListGroupItem>
                <Button className='btn -block'
                        disabled={product.countStock ===0}
                        type='button'
                        onClick={addToCartHandler}>
                          Click to Buy
            
                
                  </Button>
              </ListGroupItem>
             </ListGroup>
            </Card>
            </Col>
            
  
  

        </Row>
        </>
      )}

    </>
  )
}

export default Productdetail;