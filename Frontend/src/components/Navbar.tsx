import { useContext, useEffect } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Store } from '../Store';

const NavbarComponent = () => {
  const {state:{mode} , dispatch}= useContext(Store)
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

      <Navbar.Brand>
        DAMAZON
      </Navbar.Brand>
      <Nav>
        <Button variant={mode} onClick={changetheme}>
          <i className={mode === 'light'?'fa fa-sun':"fa fa-moon"}></i>
        </Button>
        <a href="/cart" className='nav-link'>Cart</a>
        <a href="/signin" className='nav-link'>Sign In</a>
      </Nav>
    </Container>
  </Navbar>  )
}

export default NavbarComponent;