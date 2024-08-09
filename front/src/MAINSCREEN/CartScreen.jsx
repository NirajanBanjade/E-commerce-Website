import {Link,useNavigate}  from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Row,Col,Form,Image,ListGroup,Card,Button} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/message";
import { addToCart , removeFromCart} from "../slices/cartSlice";
const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const cart = useSelector((state)=>state.cart);
  const {cartItems}=cart;
  const addToCardHandler = async (product,qty)=>{
    dispatch(addToCart({...product,qty}))
  }

  const removeFromCartHandler = async (id)=>{
    dispatch(removeFromCart(id))//we pass id here that id is addtoPayload. same for add items.
  }
  const checkoutHandler = ()=>{
    navigate(`/login?redirect=/shipping`)
  }
  return (
    <Row>
      <Col md={8}>
      <h2 style={{marginBottom:"20px",color:"skyblue"}}>Items in Cart</h2>
      {cartItems.length === 0? (
        <Message >
          You don't have anything in your cart.<Link to='/'>Back</Link>
        </Message>
      ): (
        <ListGroup variant="flush">
          {
            cartItems.map((item)=>(
              <ListGroup.Item key = {item._id}>
                <Row>
                  <Col md={3}>
                    <Image src={item.image} alt={item.name} rounded fluid/>
                  </Col>
                  <Col md={2}>
                  <Link to={`/List/${item._id}`} style={{textDecoration:"none"}}>{item.name}</Link>

                  </Col>
                  <Col md={2}>
                    <div>$ {item.price}</div>
                  </Col>
                  <Col md={3}>
                  <Form.Control as='select' value ={item.qty} onChange = {(e)=>addToCardHandler(item, Number(e.target.value))}>
                      {[...Array(item.countStock).keys()].map((x)=>(
                        <option key ={x+1} value={x+1}>
                          {x+1}
                        </option>
                      ))}
                  </Form.Control>
                  </Col>
                  <Col md={2}>
                      <Button type="button" style={{backgroundColor:"red"}} onClick={()=>removeFromCartHandler(item._id)}>
                        <div>Delete</div>
                      </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      )}
      </Col>
      <Col md={4}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5 style={{border:"px solid black", padding:"2px"}}>Subtotal({cartItems.reduce((acc,item)=>acc+item.qty,0)})
              ${cartItems.reduce((acc,item)=>acc+item.qty * item.price,0).toFixed(2)}
            </h5>
          </ListGroup.Item>
          <ListGroup.Item>
            {cartItems.reduce((acc,item)=>acc+item.qty,0)!==0?(
                <Button type="button" style={{backgroundColor:"green"}} onClick={checkoutHandler} >
                  Proceed to Checkout
                </Button>
            ):(
              ""
            )}

          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default CartScreen;