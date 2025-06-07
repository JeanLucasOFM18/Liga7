import { Element } from 'react-scroll';
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Games from './pages/Games'
import Inscription from './pages/Inscription'
import Gallery from './pages/Gallery'
import Ubication from './pages/Ubication'
import './App.css'

function App() {

  return (
    <div>
        <Navbar />
        <Element name="home" className="h-screen snap-start">
          <Home />
        </Element>
        <Element name="games" className="h-screen snap-start">
          <Games />
        </Element>
        <Element name="inscription" className="h-screen snap-start mt-200 md:mt-150 lg:mt-20">
          <Inscription />
        </Element>
        <Element name="gallery" className="h-screen snap-start mt-20 md:mt-5 lg:mt-20">
          <Gallery />
        </Element>
        <Element name="ubication" className="h-screen snap-start mt-280 md:mt-20">
          <Ubication />
        </Element>
    </div>
  )
}

export default App
