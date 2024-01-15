import React from 'react'
import {Row,Col} from 'react-bootstrap'
import List from '../list'
import Products from '../components/products'


const Mainscreen = () => {
  return (
    <>
    <h1>New Tech Products </h1>
    <Row>
      {/*map is used to traverse through each element of array given an array name*/}
      {List.map((list)=>(
    
        <Col key={list._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={list}/> 
        </Col>
      )

      )
      }
    </Row>
    </>
  )
}

export default Mainscreen;