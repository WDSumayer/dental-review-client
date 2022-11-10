import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='contianer'>
                <div className='row'>
                    <div className='py-5 bg-dark'>
                        <Link className='navbar-brand' to='/'><h3 className='text-white text-center'>Care-dent</h3></Link>
                        
                        <p className='text-white text-center'>
                        Copyright © 2022 Md. Sumayer
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;