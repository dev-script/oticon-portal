import '../App.css';
import './login.css';
import React, { useState } from 'react';
import { Container,Row, Button,Col, Form, FormGroup, Input, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import slider2 from '../images/slider2.jpg'
import axios from 'axios';
import { useHistory } from 'react-router';
import Alert from 'react-bootstrap/Alert'

function Signup(props) {
    const history= useHistory()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [occupation, setOccuption] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e)=>{
        if(e.target.name === 'firstName'){
            setFirstName(e.target.value)
        }
        if(e.target.name === 'lastName'){
            setLastName(e.target.value)
        }
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
        if(e.target.name === 'confirmPassword'){
            setConfirmPassword(e.target.value)
        }
        if(e.target.name === 'location'){
            setLocation(e.target.value)
        }
        if(e.target.name === 'occupation'){
            setOccuption(e.target.value)
        }
    }

    const handleSubmit = async ()=>{
        const payload = {
            "first_name" : firstName,
            "last_name" : lastName,
            "email" : email,
            "password" : password,
            "location" : location,
            "occupation" : occupation,
            "role" : 'user'
        }
        await axios.post('http://localhost:8443/api/v1/sign-up',payload).then((response)=>{
            history.push('/dashboard')
        }).catch((e)=>{
            if(e.response){
                setErrorMessage(e.response.data.message)
            }
        })
    }
  return (
    <>
    
    <div className="formWrap">
        <div className="table-wrap">
            <div className="align-wrap">
                <div className="formInner">
                    <div className="leftSide">                
                    <img src={slider2}></img>
                    </div>
                    {errorMessage ? <p>{errorMessage}</p> : ''}
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
                                                    <Input type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6">
                                                <FormGroup>
                                                    <Input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="text" placeholder="Occuupation" name="occupation" onChange={handleChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="text" placeholder="Location " name="location" onChange={handleChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="email" placeholder="Email Address " name="email" onChange={handleChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="Password" placeholder="Password " name="password" onChange={handleChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <FormGroup>
                                                    <Input type="Password" placeholder="Confirm Password " name="confirmPassword" onChange={handleChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12">
                                                <Button className="oticon-btn d-block w-100" onClick={handleSubmit}>Register</Button>
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

