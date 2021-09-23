import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../media/capslogo.png'
import { Link } from 'react-router-dom'
import { AmplifySignOut, AmplifyAuthenticator } from '@aws-amplify/ui-react'
import '../css/Navigation.css'

const Navigation = ({ childProps }) => {
  const handleStateChange = (state) => {
    console.log(state)
    if (state === 'signedout') {
      childProps.onUserSignOut()
    }
  }

  return (
    <div className="nav">
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand className="brand">
            <img
              alt=""
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="btn d-flex align-items-center" to="/">
                Home
              </Link>
              {childProps.isLoggedIn ? (
                <NavDropdown
                  className="btn d-flex align-items-center"
                  title="Admin Controls"
                >
                  <NavDropdown.Item
                    as={Link}
                    className="btn d-flex align-items-center"
                    to="/admin/players"
                  >
                    Players
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    className="btn d-flex align-items-center"
                    to="/admin/game"
                  >
                    {' '}
                    Games
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    className="btn d-flex align-items-center"
                    to="/admin/record"
                  >
                    {' '}
                    Record Stats
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                ''
              )}
            </Nav>
            <Nav>
              {childProps.isLoggedIn ? (
                <AmplifySignOut handleAuthStateChange={handleStateChange} />
              ) : (
                <Link className="btn btn-light m-4" to="/auth">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
