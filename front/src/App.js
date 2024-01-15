import { Container } from 'react-bootstrap';
import Header from './components/header';
import React from 'react'
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainscreen from './MAINSCREEN/mainScreen';


const App = () => {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
     
        <Mainscreen/>

        </Container>
        
       
      </main>
      <Footer/>
      
    
  
    </>
  )
}

export default App;