import React from 'react';
// import styles from './assets/styles.scss';
// import './assets/Header.css';
import logo from './logo.png';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component{
    render(){  
        return(
            <Container>
                <Navbar collapseOnSelect expand="md" variant="dark" className='nav-header d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start' >
                    <Navbar.Brand className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" href="/" >
                        <img src={logo} alt="Yiran Sun"/>         
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav"  className="nav col-12 col-lg-auto my-2 justify-content-end my-md-0 text-small ">
                        <Nav className="mt-2 mt-md-0 nav-header text-white">
                            <Nav.Link className="l navlink " href="/">Works</Nav.Link>
                            <Nav.Link className="l navlink" href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <Navbar expand="md"  variant="dark"  >
                    
                </Navbar> */}
            </Container>
                   
                    
            // <>
            //     <ButtonToolbar>
            //         <Button bsStyle="primary" bsSize="xsmall">Large</Button>
            //     </ButtonToolbar>
            //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //         <Container>
            //             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //             <Navbar.Collapse id="responsive-navbar-nav">
            //                 <Nav className="me-auto">
            //                 <Nav.Link href="#features">Features</Nav.Link>
            //                 <Nav.Link href="#pricing">Pricing</Nav.Link>
            //                 <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            //                     <NavDropdown.Divider />
            //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            //                 </NavDropdown>
            //                 </Nav>
            //                 <Nav>
            //                 <Nav.Link href="#deets">More deets</Nav.Link>
            //                 <Nav.Link eventKey={2} href="#memes">
            //                     Dank memes
            //                 </Nav.Link>
            //                 </Nav>
            //             </Navbar.Collapse>
            //         </Container>
            //     </Navbar>
            // </>
        )
    }
}
export default Header;