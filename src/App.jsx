import "./App.css";
import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Contract from "./Component/Contract/Contract";
import Footer from "./Component/Footer/Footer";
import LandingPage from "./Component/LandingPage/LandingPage";
import NavBar from "./Component/NavBar/NavBar";
import Project from "./Component/Project/Project";
import Skill from "./Component/Skill/Skill";
import TopButton from "./Component/TopButton/TopButton";
import ParticlesBg from "./Particals/ParticalsBg";
// import 'swiper/swiper-bundle.min.css';

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Banner />
      <About />
      <Skill />
      <LandingPage />
      <Project />
      <Contract />
      <TopButton />
      <Footer />
      <ParticlesBg />
    </div>
  );
}

export default App;
