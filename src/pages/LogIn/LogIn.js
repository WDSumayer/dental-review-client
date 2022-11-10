import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const LogIn = () => {
  const { logIn, googleLogin } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';
  useTitle('Login')
  const provider = new GoogleAuthProvider()
  const handleGoogleLogin = () => {
    googleLogin(provider)
    .then(result => {
      const user = result.user
      console.log(user)
      navigate(from, {replace: true})
    })
    .catch(error => console.log(error))
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(result => {
        const user = result.user

        const currentUser = {
          email: user.email
        }


        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
      .then(data => {
        localStorage.setItem('dent-token', data.token)
        navigate(from, { replace: true })
      
        
       
      })

        console.log(user)
      
       
      })
      .catch(error => console.log(error))
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-3'></div>
        <div className='col-12 col-md-6'>
          <div className='registration-form'>
            <Form onSubmit={handleLogin}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='py-2 border-0' name="email" type="email" placeholder="Enter email" />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='py-2 border-0' name="password" type="password" placeholder="Password" />
              </Form.Group>


              <Button className='w-100 py-2' variant="primary" type="submit">
                Log In
              </Button>
              <p>Create an account.<Link to='/signup'>SignUp</Link></p>
             
            </Form>
            <div>
              <h6 className='text-center'>Or</h6>
              <button onClick={handleGoogleLogin} className='bg-white w-100 border-0 py-2'><FaGoogle></FaGoogle></button>
            </div>
           
           
          </div>
        </div>
        <div className='col-12 col-md-3'></div>
      </div>
    </div>
  );
};

export default LogIn;