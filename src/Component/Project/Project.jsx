import { FaGithub, FaLink } from "react-icons/fa";
import SectionContainer from "../SectionContainer/SectionContainer";
import "./Project.css";

const Project = () => {
  return (
    <SectionContainer>
      <div className="container mx-auto text-white ">
        <h3
          id="project"
          className="uppercase text-3xl font-semibold mt-20 mb-5 text-center"
        >
          Pr<span className="text-[#da08a2]">o</span>ject
        </h3>
        <h5 className="md:px-12 px-1 text-center mb-5">
          I am a Full Stack Web Developer and have done many projects till now.
          Here are showing some of my MERN Stack-related projects.
        </h5>
        <div className="body md:flex">
          <div className="container md:flex gap-4">
            <div className="mb-8 md:w-[380px] ">
              <div className="box box1 mb-4 h-[400px]"></div>
              <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800 ">
                <h3 className="text-xl font-bold">
                  Summer Camp Playinspire sports
                </h3>
                <p className="font-semibold">MERN Stack Project</p>
                <p>
                  This is a Sports related WebSite here is some special
                  features. different types of Dashboard for different rol
                  Admin, Instructor, and normal users. stripe payment Gateway
                  System to enroll the Class.
                </p>
                <br />
                <p>
                  <span className="font-semibold">Technology :</span> VS Code |
                  Cors | ReactJS | ExpressJS | NodeJS | MongoDB | Vercel |
                  Firebase | Axios | JWT
                </p>
                <div className="flex justify-center gap-4 mt-3 mb-3">
                  <a
                    href="https://summer-camp-71b55.web.app"
                    className="text-center"
                  >
                    <button className="btn btn-md btn-outline btn-secondary py-2">
                      <span className="">Live Site</span>
                      <FaLink className="hidden xl:inline"></FaLink>
                    </button>
                  </a>
                  <a
                    href="https://github.com/alif819015/summer-camp-client"
                    className="text-center"
                  >
                    <button className="btn btn-md btn-outline btn-secondary py-2">
                      <span className="">Client</span>
                      <FaGithub className="hidden xl:inline"></FaGithub>
                    </button>
                  </a>
                  <a
                    href="https://github.com/alif819015/summer-camp-server"
                    className="text-center"
                  >
                    <button className="btn btn-md btn-outline btn-secondary py-2">
                      <span className="">Server</span>
                      <FaGithub className="hidden xl:inline"></FaGithub>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-8 md:w-[380px]">
              <div className="box box2 mb-4 h-[400px]"></div>
              <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800 ">
                <h3 className="text-xl font-bold">Toy Supper Hero</h3>
                <p className="font-semibold">MERN Stack Project</p>
                <p>
                  This is Toy Supper Hero's full-Stack dynamic E-Commerce
                  website . The website offers a user-friendly interface to
                  create an account, browse, user can upload and add, search,
                  and see details, etc.
                </p>
                <br />
                <p>
                  <span className="font-semibold">Technology :</span> VS Code |
                  Cors | ReactJS | ExpressJS | NodeJS | MongoDB | Vercel |
                  Firebase
                </p>
                <div className="flex justify-center gap-4 mt-3 mb-3">
                  <a
                    href="https://toy-marketplace-d6ceb.web.app/"
                    className="text-center"
                  >
                    <button className="btn btn-md btn-outline btn-secondary py-2">
                      <span className="">Live Site </span>
                      <FaLink className="hidden xl:inline"></FaLink>
                    </button>
                  </a>
                  <a
                    href="https://github.com/alif819015/toy-marketplace-client"
                    className="text-center"
                  >
                    <button className="btn btn-md btn-outline btn-secondary py-2">
                      <span className="">Client</span>
                      <FaGithub className="hidden xl:inline"></FaGithub>
                    </button>
                  </a>
                  <a
                    href="https://github.com/alif819015/toy-marketplace-server"
                    className="text-center"
                  >
                    <button className="btn btn-md btn-outline btn-secondary py-2">
                      <span className="">Server</span>
                      <FaGithub className="hidden xl:inline"></FaGithub>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-[380px]">
              <div className="box box3 mb-4 h-[400px]"></div>
              <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800 ">
                <h3 className="text-xl font-bold">Chinese Chef</h3>
                <p className="font-semibold">MERN Stack Project</p>
                <p>
                  This is KitchenQuest Chinese Chef Website here have been added
                  6 chef data. here is three recipes of each chef are given. and
                  if you click the favorite button then your favorite show is
                  disabled.
                </p>
                <br />
                <p>
                  <span className="font-semibold">Technology :</span> VS Code |
                  Cors | ReactJS | ExpressJS | NodeJS | MongoDB | Vercel |
                  Firebase
                </p>
                <div className="flex justify-center gap-4 mt-3 mb-3">
                  <a
                    href="https://the-news-dragon-clients-8ee7e.web.app/"
                    className="text-center"
                  >
                    <button className="btn btn-md btn-outline btn-secondary py-2">
                      <span className="">Live Site </span>
                      <FaLink className="hidden xl:inline"></FaLink>
                    </button>
                  </a>
                  <a
                    href="https://github.com/alif819015/chef-recipe-hunter-client"
                    className="text-center"
                  >
                    <button className="btn btn-md btn-outline btn-secondary py-2">
                      <span className="">Client</span>
                      <FaGithub className="hidden xl:inline"></FaGithub>
                    </button>
                  </a>
                  <a
                    href="https://github.com/alif819015/chef-recipe-hunter-server"
                    className="text-center"
                  >
                    <button className="btn btn-md btn-outline btn-secondary py-2">
                      <span className="">Server</span>
                      <FaGithub className="hidden xl:inline"></FaGithub>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Project;
