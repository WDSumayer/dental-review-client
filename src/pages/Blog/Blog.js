import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-12 col-md-3'></div>
                <div className='col-12 col-md-6'>
                    <div>
                        <h4>Difference between SQL and NoSQL</h4>
                        <p className='mb-3'>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL</p>
                        <h4>What is JWT, and how does it work?</h4>
                        <p className='mb-3'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                        <h4>What is the difference between javascript and NodeJS?</h4>
                        <p className='mb-3'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        <h4>How does NodeJS handle multiple requests at the same time?</h4>
                        <p className='mb-3'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                        
                    </div>
                </div>
                <div className='col-12 col-md-3'></div>
            </div>
            
        </div>
    );
};

export default Blog;