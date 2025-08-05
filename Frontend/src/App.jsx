import React from 'react'
import Home from './Pages/Home'
import NavigationBar from './Components/Nav/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Routes, Route } from 'react-router-dom'
import Diet from './Pages/Diet';
import AboutPage from './Pages/AboutPage';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <NavigationBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/diet-recomendation' element={<Diet />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
