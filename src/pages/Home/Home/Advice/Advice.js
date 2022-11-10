import React from 'react';
import './Advice.css'

const Advice = () => {
    return (
        <div className='container py-5'>
            <div className='row d-flex align-items-center'>
                <div className='col-12 col-md-6'>
                    <div className='advice'>
                        <h2 className='mb-4'>Advices</h2>
                        <h4>To keep teeth healthy</h4>
                        <p>You should follow these steps</p>
                        <ul>
                            <li>Don't go to bed without brushing your teeth</li>
                            <li>Brush properly</li>
                            <li>Don't neglect your tongue</li>
                            <li>Treat flossing as important as brushing</li>
                            <li>Use a fluoride toothpaste</li>
                            <li>Treat flossing as important as brushing</li>
                            <li>Don't let flossing difficulties stop you</li>
                            <li>Consider mouthwash</li>
                            <li>See your dentist at least twice a year</li>
                        </ul>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <img className='img-fluid' src='https://i.ibb.co/YtVmVDX/freestock-49068148.jpg' alt=''></img>
                </div>
            </div>
            
        </div>
    );
};

export default Advice;