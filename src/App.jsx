import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar, Sidebar } from "./components"
import { Home, Movies, TopRatedPage } from "./pages"
import { useState } from "react"

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const handleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  return (
    <BrowserRouter>
      <Navbar navIsOpen={navIsOpen} handleNav={handleNav} />
      <Sidebar navIsOpen={navIsOpen} handleNav={handleNav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/top_rated" element={<TopRatedPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
