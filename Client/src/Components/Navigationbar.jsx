import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useContext} from 'react'
import { GlobalContext } from '../Context/COntext';


export default function Navigationbar() {
    const { state, dispatch } = useContext(GlobalContext)

    const HandleLogout = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary  mb-2 " style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }} >
            <Container>
                <Navbar.Brand >
                    <div>
                        <span className='fw-bold'>New York Times Stories</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ms-auto '>
                        <Link className='nav-link' to="/home">Home</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/contact">Contact us</Link>
                        <Link className='ms-4 btn btn-danger' to="/" onClick={HandleLogout}>Logout</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
