import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Tariffs from './components/Tariffs'
import Promotions from './components/Promotions'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark-DEFAULT text-white">
      <Navigation />
      <Hero />
      <Features />
      <Tariffs />
      <Promotions />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App