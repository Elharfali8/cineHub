import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar, Sidebar } from "./components"
import { Home, Movies, TopRatedPage, TrendingPageMovies, TrendingPageTv, TvShows } from "./pages"
import { useState } from "react"
import SinglePage from "./pages/SinglePage"

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
        <Route path="/:type/top_rated" element={<TopRatedPage />} />
        <Route path="/movie/trending" element={<TrendingPageMovies />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/trending" element={<TrendingPageTv />} />
        <Route path="/:type/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
