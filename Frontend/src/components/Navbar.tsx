import { useContext, useEffect } from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Store } from '../Store';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const {state:{mode, cart} , dispatch}= useContext(Store)
  console.log("this is mode", mode)


  const changetheme =()=>{

    dispatch({
      type:"SWITCH_MODE"
    })

  }


  useEffect(()=>{

    document.body.setAttribute("data-bs-theme", mode)
  },[mode])
  return (
    <Navbar  expand="lg">
    <Container>

      <Link style={{textDecoration:"none", color:'grey'}} to="/" >
        DAMAZON
      </Link>
      <Nav>
        <Button variant={mode} onClick={changetheme}>
          <i className={mode === 'light'?'fa fa-sun':"fa fa-moon"}></i>
        </Button>

        <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>        <a href="/signin" className='nav-link'>Sign In</a>
      </Nav>
    </Container>
  </Navbar>  )
}

export default NavbarComponent;