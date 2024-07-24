import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar, Sidebar } from "./components"
import { Home } from "./pages"
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
