import React from 'react'
import {Row,Col} from 'react-bootstrap'
// import List from '../list'
import Products from '../components/products'
// import { useState,useEffect } from 'react'
// import axios from 'axios';
import { useGetProductsQuery } from '../slices/productApislice'
import Loader from '../components/loader'
import Message from '../components/message'


const Mainscreen = () => {

  // async function fetchdata(){
  //   const response = await fetch("http://localhost:5000/api/List");
  //   const fetched=await response.json();
  //   console.log(fetched);
  // }

  // const [List,setList]=useState([]);

  // useEffect(()=>{
  //   const fetchProducts=async()=>{
  //     const {data}=await axios.get('/api/List');
  //     setList(data);
  //   };

  //   fetchProducts();
  // },[]);
  const {data :List, isLoading, error} = useGetProductsQuery();

  return (
    <>
     {isLoading ? (
      <Loader/>
     ): error ? (
      <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>
     ): (
      <>
      <h2>New Tech Products </h2>
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
     )}
    
    </>
  )
}
export default Mainscreen;