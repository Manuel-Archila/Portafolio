import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './App.css'
import Info from './components/Info'
import Languages from './components/Languages'
import Picture from './components/Picture'
import Projects from './components/Projects'

const App = () => {
  useEffect(() => {
    Aos.init()
    document.getElementById('app').addEventListener('scroll', () => {
      Aos.refresh()
    })
    const progress = document.getElementById('progressbar')
    const totalHeight = document.body.scrollHeight - window.innerHeight
    window.onscroll = () => {
      const progressHeight = (window.pageYOffset / totalHeight) * 100
      progress.style.height = `${progressHeight}%`
    }
  }, [])

  return (
    <div className="App" id="app">
      <div className="progressbar" id="progressbar" />
      <div className="scrollPath" id="scrollPath" />
      <Info />
      <Picture />
      <Projects />
      <Languages />
    </div>
  )
}

export default App
