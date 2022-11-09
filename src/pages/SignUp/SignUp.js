import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './SignUp.css'
 

const SignUp = () => {
    const {register, updateUser} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
       
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            setError("Your password didn't match.")
            return
          }


        register(email, password)
        .then(result => {
            const user = result.user
            setError('')
            form.reset()
            console.log(user)
            updateUser(name, photoUrl)
            .then(() => {}).catch(error => console.log(error))
           
        })
        .catch(error => {
            setError(error.message)
        })

       
    }


  
    return (
        <div className='container'>
         <div className='row'>
          <div className='col-12 col-md-3'></div>
          <div className='col-12 col-md-6'>
         <div className='registration-form'>
          <h2>Please SignUp</h2>
         <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control className='py-2 border-0' name="name" type="text" placeholder="name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUrl">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control className='py-2 border-0' name="photoUrl" type="url" placeholder="url" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='py-2 border-0' type="email" name="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='py-2 border-0' type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control className='py-2 border-0' name="confirm" type="password" placeholder="confirm" />
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <Button variant="primary" className='w-100 py-2' type="submit">
        Sign Up
      </Button>
      <p>Already have an account? <Link to='/login'>Log in</Link></p>
    </Form>
         </div>
          </div>
          <div className='col-12 col-md-3'></div>
         </div>
        </div>
    );
};

export default SignUp;