import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import LoginForm from './pages/LoginForm'
import About from './pages/AboutUs'
import Contactus from './pages/Contactus'
import Services from './pages/Services'
import DoctorsProfile from './pages/DoctorsProfile'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctorsprofile" element={<DoctorsProfile />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
