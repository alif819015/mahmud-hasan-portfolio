import './App.css'
import About from './Component/About/About'
import Banner from './Component/Banner/Banner'
import NavBar from './Component/NavBar/NavBar'
import Project from './Component/Project/Project'
import Skill from './Component/Skill/Skill'

function App() {
  return (
    <div className='bg-black'>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Project></Project>
    </div>
  )
}

export default App
