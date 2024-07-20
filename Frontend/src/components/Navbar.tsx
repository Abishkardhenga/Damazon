import { useContext, useEffect } from 'react';
import { Badge, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Store } from '../Store';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const { state: { mode, cart, userInfo }, dispatch } = useContext(Store)
  console.log("this is mode", mode)


  const changetheme = () => {

    dispatch({
      type: "SWITCH_MODE"
    })

  }

  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }


  useEffect(() => {

    document.body.setAttribute("data-bs-theme", mode)
  }, [mode])
  return (
    <Navbar expand="lg">
      <Container>

        <Link style={{ textDecoration: "none", color: 'grey' }} to="/" >
          DAMAZON
        </Link>
        <Nav>
          <Button variant={mode} onClick={changetheme}>
            <i className={mode === 'light' ? 'fa fa-sun' : "fa fa-moon"}></i>
          </Button>

          <Link to="/cart" className="nav-link">
            Cart
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
              <Link
                className="dropdown-item"
                to="#signout"
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </NavDropdown>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>)
}

export default NavbarComponent;