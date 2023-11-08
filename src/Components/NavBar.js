import React from 'react';
import { Nav, Container, Form, Navbar } from 'react-bootstrap';
import imageProfil from '../assets/Images/img-team-3.jpg';

function NavBar() {
    return (
        <div className='navbar'>
            <Navbar expand="lg" className="bg-body-white w-100">
                <Container>
                    <Navbar.Brand href="#"><i class="bi bi-play-circle-fill text-info"></i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='mx-5'>
                        <Nav
                            className="me-auto my-2 my-lg-0 nav"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='fs-5 nav-link'>Actors</Nav.Link>
                            <Nav.Link href="#action2" className='fs-5 nav-link'>Projects</Nav.Link>
                            <Nav.Link href="#action2" className='fs-5 nav-link'>Castings</Nav.Link>
                            <Nav.Link href="#action2" className='fs-5 nav-link'>Payouts</Nav.Link>
                            <Nav.Link href="#action2" className='fs-5 nav-link'>Team</Nav.Link>
                        </Nav>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 rounded-pill h-75"
                                    aria-label="Search"
                                />
                                <div className="d-flex justify-content-center align-items-center">
                                    <i class="bi bi-search" role="button"></i>
                                </div>
                            </Form>
                            <h6 className='text-white bg-info mx-3 rounded py-2 px-3'>3</h6>
                            <div className='mx-3'>
                                <img src={imageProfil} alt="img"  className='rounded-circle'/>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar