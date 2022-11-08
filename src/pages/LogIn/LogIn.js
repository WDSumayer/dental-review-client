import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {
    const {logIn} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
       
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
             <Form onSubmit={handleLogin}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      
     
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <p>Create an account.<Link to='/signup'>SignUp</Link></p>
    </Form>
        </div>
    );
};

export default LogIn;