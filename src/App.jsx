import './App.css'
import About from './Component/About/About'
import Banner from './Component/Banner/Banner'
import Contract from './Component/Contract/Contract'
import Footer from './Component/Footer/Footer'
import NavBar from './Component/NavBar/NavBar'
import Project from './Component/Project/Project'
import Skill from './Component/Skill/Skill'
import TopButton from './Component/TopButton/TopButton'
import ParticlesBg from './Particals/ParticalsBg'
// import 'swiper/swiper-bundle.min.css';

function App() {
  return (
    <div className='bg-black'>
    
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contract></Contract>
      <TopButton></TopButton>
      <Footer></Footer>
      <ParticlesBg></ParticlesBg>
    </div>
  )
}

export default App
