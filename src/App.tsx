import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import './App.css'
import ScrollTopButton from './components/scrollTopButton/ScrollTopButton'

function App() {
  return (
    <>
      <Home />
      <ScrollTopButton />
      <About />
      <Footer />
    </>
  )
}

export default App
