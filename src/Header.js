import React from 'react';
import {useState} from 'react';

// import styles from "./index.css"
// import styles from './assets/styles.scss';
// import './assets/Header.css';
import logo from './assets/img/logo.png';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { render } from '@testing-library/react';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { LinkContainer } from 'react-router-bootstrap';

const tabs = [
    {
      id: '0',
      href: '/',
      text:'Work',
    },
    {
      id: '1',
      href: '/about',
      text:'About'
    },
];



// class Header extends React.Component{
    
    
//     render(){
//         return(
//             <ToggleButton/>
//         )
//     }
// }
function Header(props){
    if (props.val==null){
        props.val=0;
    }
    // const [selected, setSelected] = React.useState(props.val)
    return (
        <>
        
        <Container>
            <Navbar collapseOnSelect expand="md" variant="dark" className='nav-header d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start' >
                <Navbar.Brand className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" href="/" >
                    <img src={logo} alt="Yiran Sun"/>         
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav"  className="nav col-12 col-lg-auto my-2 justify-content-end my-md-0 text-small ">
                    <Nav className="mt-2 mt-md-0 nav-header">
                    {tabs.map((item) => (
                        <Nav.Link href={item.href} className={"l navlink  text-white "+(props.val===item.id?'selected':null)} >{item.text}</Nav.Link>
                            
                    ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
        </Container>
        </>
    );
}
export default Header;