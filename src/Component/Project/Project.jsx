import SectionContainer from "../SectionContainer/SectionContainer";
import './Project.css';

const Project = () => {
    return (
        <SectionContainer>
            <div className="text-white">
            <h3 id="project" className="uppercase text-3xl font-semibold mt-20 mb-10 text-center">Project</h3>
            <div className="body md:flex">
            <div className="container md:flex">
                <div className="box box1 mb-4 md:w-[380px] h-[400px]"></div>
                <div className="box box2 mb-4 md:w-[380px] h-[400px]"></div>
                <div className="box box3 mb-4 md:w-[380px] h-[400px]"></div>
            </div>
            </div>
            </div>
        </SectionContainer>
    );
};

export default Project;