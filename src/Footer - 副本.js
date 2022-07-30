import React from 'react';
// import styles from './assets/styles.scss';
// import './assets/Header.css';
// import logo from './logo.png';

// import './assets/Global.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { LinkContainer } from 'react-router-bootstrap';
import { FaLinkedin,FaInstagram} from 'react-icons/fa'

class Footer extends React.Component{
    render(){ 
        return(
            // <Navbar  expand="md" variant="dark" className="justify-content-center">
            <div className="d-flex justify-content-center">
                <footer className="py-3 my-4">
                    <h2 className="text-center" >Contact</h2>
                    <br/>
                    <h4 className="text-center" >Email: ysun20@sva.edu </h4>
                    <br/>
                    <a className="p-5 text-white" href="/" target="_blank" rel="noreferrer"><FaInstagram size={70}/></a>
                    <a className="p-5 text-white" href="/" target="_blank" rel="noreferrer"><FaLinkedin size={70}/></a>
                    <br/>
                    <br/>
                    <h4 className="text-center text-white" >© 2022 by Yiran Sun.</h4>
                </footer>
            </div>
            // </Navbar>
            // <>
            //     <Navbar collapseOnSelect expand="md" bg="dark" variant="dark"  className="justify-content-center">
            //         <Navbar.Brand href="/" >
            //             <img src={logo} alt="Contact"/>         
            //         </Navbar.Brand>
            //     </Navbar>
            //     <Navbar expand="md" bg="dark" variant="dark"  >
            //         <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-center">
            //             <Nav className="mt-2 mt-md-0">
            //                 <Nav.Link href="/">Works</Nav.Link>
            //                 <Nav.Link href="/about">About</Nav.Link>
            //             </Nav>
            //         </Navbar.Collapse>
            //     </Navbar>
            // </>
                   
                    
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
export default Footer;