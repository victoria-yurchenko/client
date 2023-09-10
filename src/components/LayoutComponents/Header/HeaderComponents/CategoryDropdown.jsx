import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

export default function CategoryDropdown() {

    const handleEnter = (event) => {
        event.target.style.color = '#D10024';
    }

    const handleLeave = (event) => {
        event.target.style.color = 'black';
    }

    return (
        <>
            <NavDropdown title="Categories" className='nav-link navbar-text main-nav' style={{ fontWeight: '500' }}  >
                <NavDropdown.Item style={{backgroundColor: '#ececee'}} onMouseEnter={handleEnter} onMouseLeave={handleLeave} href="/store">All</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={{backgroundColor: '#ececee'}} onMouseEnter={handleEnter} onMouseLeave={handleLeave} href="/guitars">Guitars</NavDropdown.Item>
                <NavDropdown.Item style={{backgroundColor: '#ececee'}} onMouseEnter={handleEnter} onMouseLeave={handleLeave} href="/store">Pianos</NavDropdown.Item>
                <NavDropdown.Item style={{backgroundColor: '#ececee'}} onMouseEnter={handleEnter} onMouseLeave={handleLeave} href="/store">Accessories</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
        </>
    )
}
