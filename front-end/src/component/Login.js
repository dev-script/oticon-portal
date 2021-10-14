import '../App.css';
import './login.css';
import React, {useState} from 'react';
import { Container, Button, Form, FormGroup, Input, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Label} from 'reactstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import slider from '../images/slider.jpg'
import axios from 'axios';
import { useHistory } from 'react-router';

function Login(props) {
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [emailError,setEmailError] = useState('')
    const [passwordError,setPasswordError] = useState('')

    const handleChange = (e)=>{
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        let validate = true
        if(email === '' || email === undefined ){
            setEmailError('email is required')
            validate = false
        }
        if(password === '' || password === undefined ){
            setPasswordError('password is required')
            validate = false
        }
        const payload = {
            "email" : email,
            "password" : password 
        }
        if(validate === true){
            await axios.post('http://localhost:8443/api/v1/login',payload).then((response)=>{
                history.push('/dashboard')
            })
        }
    }
  return (
    <>
    
    <div className="formWrap">
        <div className="table-wrap">
            <div className="align-wrap">
                <div className="formInner">
                    <div className="leftSide">           
                        <img src={slider}></img>
                    </div>
                    <div className="rightContent">
                        <div className="rightContentInner">
                            <div className="table-wrap">
                            <div className="align-wrap">
                                    <div className="sectiontitle">
                                        <h3>Hi, Welcome Back</h3>
                                        <span className="subtitle">Singal device to solve your hearing problem</span>
                                    </div>
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                            
                                                <span><i className="BiArrowRight"></i></span>
                                                <Input type="email" name="email" placeholder="Enter Your Email Address" onChange={handleChange} />
                                            </Label>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>
                                                <span></span>
                                                <Input type="password" name="password" placeholder="Enter Password" onChange={handleChange} />
                                            </Label>
                                        </FormGroup>
                                        <Button className="oticon-btn d-block w-100" onClick={handleSubmit}>Login</Button>
                                        <span className="formbottom">Not Yet Registered?<a href="/signup">Create Account</a> <a href="#0" className="float-right">Forgot Password?</a></span>
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

export default Login;