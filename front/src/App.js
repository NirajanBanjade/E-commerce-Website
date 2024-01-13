import { Container } from 'react-bootstrap';
import Header from './components/header';
import React from 'react'
import Footer from './components/footer';


const App = () => {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
        Welcome to the future

        </Container>
       
      </main>
      <Footer/>
    
  
    </>
  )
}

export default App;