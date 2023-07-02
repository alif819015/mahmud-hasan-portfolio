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
      <div className=" text-white">
        <h3 id="skill" className="uppercase text-3xl font-semibold mt-20 text-center">Skill</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mt-8">
            <div className="">
                <img className="mx-auto w-16" src={img1} alt="" />
                <p className="text-center">HTML5</p>
            </div>
            <div>
                <img className="mx-auto w-16" src={img2} alt="" />
                <p className="text-center">CSS3</p>
            </div>
            <div>
                <img className="mx-auto w-16" src={img3} alt="" />
                <p className="text-center">javascript</p>
            </div>
            <div>
                <img className="mx-auto w-16" src={img4} alt="" />
                <p className="text-center">Bootstrap</p>
            </div>
            <div>
                <img className="mx-auto w-16" src={img5} alt="" />
                <p className="text-center">Tailwind CSS</p>
            </div>
            <div>
                <img className="mx-auto w-16" src={img6} alt="" />
                <p className="text-center">Node Js</p>
            </div>
            <div>
                <img className="mx-auto w-16" src={img7} alt="" />
                <p className="text-center">React Js</p>
            </div>
            <div>
                <img className="mx-auto w-16" src={img8} alt="" />
                <p className="text-center">MongoDB</p>
            </div>
            <div>
                <img className="mx-auto w-16" src={img9} alt="" />
                <p className="text-center">Firebase</p>
            </div>
            <div>
                <img className="mx-auto w-16" src={img10} alt="" />
                <p className="text-center">Express Js</p>
            </div>
            
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skill;
