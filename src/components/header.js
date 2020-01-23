import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'


import './../sass/main.scss'

const Header = ({ siteTitle }) => (
  <header className="header">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header