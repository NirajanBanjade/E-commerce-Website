import {Container,Row,Col} from "react-bootstrap"
import React from 'react'

const Footer = () => {
    const currYear= new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row >
                <Col className="text-center py-3">
                    <p className="foot"> NStore &copy; {currYear}</p>
                </Col>

            </Row>
        </Container>
    </footer>
  )
}

export default Footer