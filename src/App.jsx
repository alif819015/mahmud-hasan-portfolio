import './App.css'
import About from './Component/About/About'
import Banner from './Component/Banner/Banner'
import Contract from './Component/Contract/Contract'
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
      <Contract></Contract>
    </div>
  )
}

export default App
