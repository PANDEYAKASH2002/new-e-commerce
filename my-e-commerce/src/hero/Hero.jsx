import REACT from 'react';
import {  Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Hero(){
    return(
        <div className="homepage">
          <Row>
            <Col>
            <h1 className="custom">Customized <br></br>
                Printed Tees</h1>
                <p className="para">we love your styling and ready to style for you.</p>
                <button className="explore">EXPLORE STORE <FaArrowRight /></button>
            </Col>
            <Col className='col-img'>
           
            <img src="boy-t2.png"></img>

            </Col>

          </Row>
        </div>
    );
}
export default Hero;