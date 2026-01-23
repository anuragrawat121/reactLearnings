import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Course from './Pages/Couse'
import CourseDetails from './Pages/CourseDetails'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Course/:id" element={<CourseDetails />} />
        <Route path="/Product" element={<Product />}>
          <Route path="Men" element={<Men />} />
          <Route path="Women" element={<Women />} />
          <Route path="Kids" element={<Kids />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
