import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NavbarP = () => {
  const total = []
  // const token = false
  return (
    <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
      <Container>
        <Link to='/' className='text-decoration-none btn btn-link'> <Navbar.Brand>Pizzería Mamma Mia</Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='text-decoration-none btn btn-link'>🍕Home
            </Link>
            <Link to='/profile' className='text-decoration-none btn btn-link'>🔓Profile</Link>
            {/* <Link to='/' className='text-decoration-none btn btn-link'>🔒Logout</Link> */}
            <Link to='/login' className='text-decoration-none btn btn-link'>🔐Login</Link>
            <Link to='/register' className='text-decoration-none btn btn-link'>🔐Register</Link>
          </Nav>
        </Navbar.Collapse>
        <Link to='/cart' className='text-decoration-none btn btn-link'>
          <Button variant='outline-light'>

            🛒Total: ${total}
          </Button>
        </Link>

      </Container>
    </Navbar>
  )
}

export default NavbarP
