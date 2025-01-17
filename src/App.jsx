import React from 'react'
import Home from './Pages/Home'
import NavigationBar from './Components/Nav/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const App = () => {
  return (
    <div >
   <NavigationBar/>   
      <Home/>
    </div>
  )
}

export default App