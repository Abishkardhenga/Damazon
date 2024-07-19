
import { Container, ToastContainer } from 'react-bootstrap'
import Homepage from './pages/Homepage'
import 'react-toastify/dist/ReactToastify.css'
import NavbarComponent from './components/Navbar'

function App() {

  return (
    <div className='vh-full d-flex flex-column'>
            <ToastContainer position="bottom-center" limit={1} />
      <header>
      <NavbarComponent/>
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
