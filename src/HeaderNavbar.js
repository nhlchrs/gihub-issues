import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Octicon from 'react-component-octicons';
import Avatar from 'react-avatar';
function HeaderNavbar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      <img
        src="https://image.flaticon.com/icons/png/512/25/25231.png"
        width="30"
        height="30"
        className="d-inline-block align-top nav-icon"
        alt="Github Logo"
      />
    </Navbar.Brand>
    <input type="text" className="search-box" placeholder="Search or jump to..."/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Pull requests</Nav.Link>
          <Nav.Link>Issues</Nav.Link>
          <Nav.Link>Marketplace</Nav.Link>
          <Nav.Link>Explore</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link><Octicon name="bell" className="octicon-icon"/></Nav.Link>
          <Nav.Link><Octicon name="plus" className="octicon-icon"/><span className= "caret"></span></Nav.Link>
          <Nav.Link>
          <Avatar twitterHandle="sitebase" size="30" round="20px" />
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default HeaderNavbar
