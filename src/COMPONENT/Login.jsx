import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { IoLockClosed } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navs = useNavigate();
  const [text, setText] = useState({ email: "", password: "" });


  const getInp = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const submited = (e) => {
    e.preventDefault();
    if (text.email === '123@gmail.com' && text.password === '123456') {
      navs('/tables');
    } else {
      alert('The Email/Password is Invalid');

    }

    // axios.post("https://textile.torcdeveloper.com/api/v1/login",text).then((res)=> navs('/tables')).catch((error)=>alert(error.response.data.message))
  };

  return (
    <div className='main'>
      <div className='sub'>
        <h1>Login</h1>
        <Form className='form' onSubmit={submited}>
          <Form.Group className="inp" controlId="formBasicEmail">
            <InputGroup>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={getInp}
                name="email"
                className="inputField"
              />
              <InputGroup.Text className="inputIcon">
                <FaUser />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group className="inp" controlId="formBasicPassword">
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={getInp}
                name="password"
                className="inputField"
              />
              <InputGroup.Text className="inputIcon">
                <IoLockClosed />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group className="check" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" className="remember-me" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className='bttn'>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
