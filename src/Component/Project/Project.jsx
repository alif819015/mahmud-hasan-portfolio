import { FaGithub, FaLink } from "react-icons/fa";
import SectionContainer from "../SectionContainer/SectionContainer";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        <div>
          <Swiper
            spaceBetween={70}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {/* Project 1 */}
            <SwiperSlide>
              <div className="mb-8 md:w-[380px]">
                <div className="box box1 mb-4 h-[400px]"></div>
                <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800">
                  <h3 className="text-xl font-bold">Miss Fit</h3>
                  <p className="font-semibold mt-2 mb-1">Front End Project</p>
                  <p>
                    Explore our fitness website with diverse product categories.
                    Effortlessly filter by product name and price, ensuring a
                    delightful user experience with a focus on enjoyment and
                    beautiful UI design.
                  </p>
                  <br />
                  <p>
                    <span className="font-semibold">Technology:</span> VS Code |
                    ReactJS | Vercel | Axios | Tailwindcss
                  </p>
                  <div className="flex justify-center gap-4 mt-3 mb-3">
                    <a
                      href="https://miss-fit.vercel.app/"
                      className="text-center"
                    >
                      <button className="btn btn-md btn-outline btn-secondary py-2">
                        <span className="">Live Site</span>
                        <FaLink className="hidden xl:inline"></FaLink>
                      </button>
                    </a>
                    <a
                      href="https://github.com/shahid1105/miss-fit/tree/mahmudhasan"
                      className="text-center"
                    >
                      <button className="btn btn-md btn-outline btn-secondary py-2">
                        <span className="">Client</span>
                        <FaGithub className="hidden xl:inline"></FaGithub>
                      </button>
                    </a>
                    <a
                      href=""
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
            </SwiperSlide>
            {/* Project 2 */}
            <SwiperSlide>
              <div className="mb-8 md:w-[380px]">
                <div className="box box2 mb-4 h-[400px]"></div>
                <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800">
                  <h3 className="text-xl font-bold">
                    Summer Camp Playinspire Sports
                  </h3>
                  <p className="font-semibold mt-2 mb-1">MERN Stack Project</p>
                  <p>
                    Explore our Sports Website with tailored dashboards for
                    Admins, Instructors, and users. Utilize our Stripe payment
                    gateway to seamlessly enroll in classes and enjoy a
                    streamlined experience.
                  </p>
                  <br />
                  <p>
                    <span className="font-semibold">Technology:</span> | Cors |
                    ReactJS | ExpressJS | NodeJS | MongoDB | Firebase | Axios |
                    JWT
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
            </SwiperSlide>

            {/* Project 3 */}
            <SwiperSlide>
              <div className="mb-8 md:w-[380px]">
                <div className="box box3 mb-4 h-[400px]"></div>
                <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800">
                  <h3 className="text-xl font-bold">Toy Supper Hero</h3>
                  <p className="font-semibold mt-2 mb-1">MERN Stack Project</p>
                  <p>
                    Toy Supper Hero's dynamic full-stack E-Commerce website
                    offers a user-friendly interface for account creation,
                    browsing, uploading, adding, searching, and viewing details
                    seamlessly.
                  </p>
                  <br />
                  <p>
                    <span className="font-semibold">Technology:</span> VS Code |
                    Cors | ReactJS | ExpressJS | NodeJS | MongoDB | Vercel |
                    Firebase
                  </p>
                  <div className="flex justify-center gap-4 mt-3 mb-3">
                    <a
                      href="https://toy-marketplace-d6ceb.web.app/"
                      className="text-center"
                    >
                      <button className="btn btn-md btn-outline btn-secondary py-2">
                        <span className="">Live Site</span>
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
            </SwiperSlide>

            {/* Project 4 */}
            <SwiperSlide>
              <div className="md:w-[380px]">
                <div className="box box4 mb-4 h-[400px]"></div>
                <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800">
                  <h3 className="text-xl font-bold">Chinese Chef</h3>
                  <p className="font-semibold mt-2 mb-1">MERN Stack Project</p>
                  <p>
                    KitchenQuest Chinese Chef website showcases profiles of 6
                    chefs, each with three unique recipes. The favorite button
                    feature disables after clicking, ensuring a streamlined user
                    experience.
                  </p>
                  <br />
                  <p>
                    <span className="font-semibold">Technology:</span> VS Code |
                    Cors | ReactJS | ExpressJS | NodeJS | MongoDB | Vercel |
                    Firebase
                  </p>
                  <div className="flex justify-center gap-4 mt-3 mb-3">
                    <a
                      href="https://the-news-dragon-clients-8ee7e.web.app/"
                      className="text-center"
                    >
                      <button className="btn btn-md btn-outline btn-secondary py-2">
                        <span className="">Live Site</span>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Project;
