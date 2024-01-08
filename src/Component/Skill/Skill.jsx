import SectionContainer from "../SectionContainer/SectionContainer";
import img1 from '../../../public/Skill/html.png';
import img2 from '../../../public/Skill/css.png';
import img3 from '../../../public/Skill/js.png';
import img4 from '../../../public/Skill/bootstrap.png';
import img5 from '../../../public/Skill/tailwind.png';
import img6 from '../../../public/Skill/node.png';
import img7 from '../../../public/Skill/reactjs.png';
import img8 from '../../../public/Skill/mongo.png';
import img9 from '../../../public/Skill/firebase.png';
import img10 from '../../../public/Skill/express.png';

const Skill = () => {
  return (
    <SectionContainer>
      <div className=" container mx-auto text-white">
        <h3 id="skill" className="uppercase text-3xl font-semibold mt-20 mb-5 text-center">Sk<span className="text-[#da08a2]">i</span>ll</h3>
        <h5 className="md:px-12 px-1 text-center ">I have 1 Year of experience with MERN stack. I have a good understanding of web development technologies, and stacks like MongoDB, Express.js, React.js, Bootstrap, tailwindscss, and Node.js.</h5>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mt-8">
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-16" src={img1} alt="" />
                <p className="text-center">HTML5</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={90} max="100"></progress>
            </div>
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-16" src={img2} alt="" />
                <p className="text-center">CSS3</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={90} max="100"></progress>
            </div>
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-14 mb-2" src={img3} alt="" />
                <p className="text-center">javascript</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={70} max="100"></progress>
            </div>
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-16 mb-3" src={img4} alt="" />
                <p className="text-center">Bootstrap</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={80} max="100"></progress>
            </div>
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-16 mb-6" src={img5} alt="" />
                <p className="text-center">Tailwind CSS</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={90} max="100"></progress>
            </div>
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-16" src={img6} alt="" />
                <p className="text-center">Node Js</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={70} max="100"></progress>
            </div>
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-16" src={img7} alt="" />
                <p className="text-center">React Js</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={80} max="100"></progress>
            </div>
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-16" src={img8} alt="" />
                <p className="text-center">MongoDB</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={60} max="100"></progress>
            </div>
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-16" src={img9} alt="" />
                <p className="text-center">Firebase</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={70} max="100"></progress>
            </div>
            <div className="card p-3 bg-gray-900 hover:bg-[#240666]">
                <img className="mx-auto w-28 mb-1" src={img10} alt="" />
                <p className="text-center">Express Js</p>
                <progress className="progress progress-secondary bg-white min-w-fit mt-1" value={70} max="100"></progress>
            </div>
            
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skill;
