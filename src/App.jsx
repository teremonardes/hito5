import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Login/Login'
import Cart from './Pages/Cart/Cart'
import Register from './Pages/Register/Register'
import NotFound from './Pages/NotFound/NotFound'
import Pizza from './Pages/Pizza/Pizza'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/p001' element={<Pizza />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />
    </BrowserRouter>

  )
}

export default App
