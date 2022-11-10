import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='navbar-brand' to='/'>Care-dent</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/myreviews'>My Reviews</Link>
                            <Link className='nav-link' to='/addServices'>Add Service</Link>
                            {
                                user?.uid ?
                                    <button onClick={handleLogout}>LogOut</button>
                                    :
                                    <>
                                        <Link className='nav-link' to='/login'>Login</Link>
                                        <Link className='nav-link' to='/signup'>SignUp</Link>
                                    </>
                            }




                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;