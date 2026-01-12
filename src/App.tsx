import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Destinations from './pages/Destinations'
import Kenya from './pages/Destinations/kenya/index'
import Tanzania from './pages/Destinations/Tanzania'
import Uganda from './pages/Destinations/Uganda'
import Contact from './pages/Contact'
import Rwanda from './pages/Destinations/Rwanda'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/destinations/kenya/*' element={<Kenya/>}/>
        <Route path='/destinations/tanzania/*' element={<Tanzania />}/>
        <Route path='/destinations/uganda/*' element={<Uganda />}/>
        <Route path='/destinations/rwanda/*' element={<Rwanda />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
