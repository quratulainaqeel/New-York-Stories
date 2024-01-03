import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'


export default function Navigationbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categories, setcategories] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/get-all-category').then(json => setcategories(json.data.Category)).catch((err) => console.log(err))
    // }, [])

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary  mb-2 " style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }} >
            <Container>
                <Navbar.Brand >
                    <div>
                        {/* <BiPlusMedical className='text-primary' /> */}
                        <span className='fw-bold'>New York Times Stories</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ms-auto '>
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/services">About</Link>
                        <Link className='nav-link' to="/contact">Contact us</Link>
                        <Link className='ms-4 btn btn-danger' to="/signup">Logout</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
