import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle('Add Services')



    const handleAddService = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;
        const price = form.price.value;

        const service = {
            name: name,
            img: photoUrl,
            description: description,
            price: price

        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
           })
           .then(res => res.json())
           .then(data => {
            if(data.acknowledged){
                form.reset()
                toast.success('Congratulation, you are right!!!', {autoClose: 1000})
                
            }
            console.log(data)
           })
           .catch(error => console.log(error))
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-3'></div>
                <div className='col-12 col-md-6'>
                    <div>
                    <Form onSubmit={handleAddService}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control className='py-2' name="name" type="text" placeholder="name" required />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUrl">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control className='py-2' name="photoUrl" type="url" placeholder="url" required />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <p><textarea className='py-2 w-100' rows='10' type="text" name="description" placeholder="Enter email" required /></p>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control className='py-2' type="text" name="price" placeholder="Enter email" required />
       
      </Form.Group>

      
      
      
      <Button variant="primary" className='w-100 py-2' type="submit">
        ADD SERVICE
      </Button>
      
    </Form>
                    </div>
                </div>
                <div className='col-12 col-md-3'></div>
            </div>
            
        </div>
    );
};

export default AddServices;