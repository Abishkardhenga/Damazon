import { Container, Nav, Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar bg='dark' variant='dark' expand="lg">
    <Container>

      <Navbar.Brand>
        DAMAZON
      </Navbar.Brand>
      <Nav>
        <a href="/cart" className='nav-link'>Cart</a>
        <a href="/signin" className='nav-link'>Sign In</a>
      </Nav>
    </Container>
  </Navbar>  )
}

export default NavbarComponent;