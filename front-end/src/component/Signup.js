import '../App.css';
import './login.css';
import React from 'react';
import { Container,Row, Button,Col, Form, FormGroup, Input, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import slider2 from '../images/slider2.jpg'

function Signup(props) {

  return (
    <>
    
    <div className="formWrap">
        <div className="table-wrap">
            <div className="align-wrap">
                <div className="formInner">
                    <div className="leftSide">                
                    <img src={slider2}></img>
                    </div>
                    <div className="rightContent">
                        <div className="rightContentInner">
                            <div className="table-wrap">
                                <div className="align-wrap">
                                    <div className="sectiontitle">
                                        <h3>Create your account</h3>
                                        <span className="subtitle">Singal device to solve your hearing problem</span>
                                    </div>
                                    <Form>
                                        <Row>
                                            <Col sm="6">
                                                <FormGroup>
                                                    <Input type="text" placeholder="First Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6">
                                                <FormGroup>
                                                    <Input type="text" placeholder="Last Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="text" placeholder="Occuupation" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="text" placeholder="Location " />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="email" placeholder="Email Address " />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="email" placeholder="Confirm Email Address " />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="Password" placeholder="Password " />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="Password" placeholder="Confirm Password " />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <Button className="oticon-btn d-block w-100">Login</Button>
                                                <span className="formbottom text-center">Already have an account?<a href="/">Login</a></span>
                                            </Col>
                                        </Row>
                                    </Form>
                                    </div>
                                    </div>
                            <div className="bottomlinks">
                                <ul>
                                    <li>
                                        <a href="#0">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#0">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#0">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#0">Terms of Use</a>
                                    </li>
                                </ul>
                                <p>Copyright &copy; 2021. Oticon. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    </>
    
  );
}

export default Signup;

