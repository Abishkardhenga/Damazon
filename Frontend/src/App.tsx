
import { Container, Nav, Navbar } from 'react-bootstrap'
import Homepage from './pages/Homepage'

function App() {

  return (
    <div className='vh-full d-flex flex-column'>
      <header>
        <Navbar bg='dark' variant='dark' expand="lg">
          <Container>

            <Navbar.Brand>
              AMAZON
            </Navbar.Brand>
            <Nav>
              <a href="/cart" className='nav-link'>Cart</a>
              <a href="/signin" className='nav-link'>Sign In</a>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>

          <Homepage />

        </Container>

      </main>
      <footer>
        <div className='text-center'>

          Alright reserved
        </div>
      </footer>
    </div>
  )
}

export default App
