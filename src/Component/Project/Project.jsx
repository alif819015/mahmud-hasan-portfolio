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
        <h5 className="md:px-12 px-1 text-center mb-5 tracking-[0.25px]">
          I am a Full Stack Web Developer and have done many projects till now.
          Here are showing some of my MERN Stack-related projects.
        </h5>
        <div>
          <Swiper
            spaceBetween={150}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 0px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              767: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {/* Project 1 */}
            <SwiperSlide>
              <div className="mb-8 md:w-[380px]">
                <div className="box box1 mb-4 h-[400px]"></div>
                <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800">
                  <h3 className="text-xl font-bold tracking-[0.25px]">
                    Miss Fit
                  </h3>
                  <p className="font-semibold mt-2 mb-1 tracking-[0.25px]">
                    Front End Project
                  </p>
                  <p className=" tracking-[0.25px]">
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
                  <div className="flex justify-center gap-4 mt-4 mb-6">
                    <a
                      href="https://miss-fit.vercel.app/"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Live Site
                        </span>
                        <FaLink className="hidden xl:inline"></FaLink>
                      </button>
                    </a>
                    <a
                      href="https://github.com/shahid1105/miss-fit/tree/mahmudhasan"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Client
                        </span>
                        <FaGithub className="hidden xl:inline"></FaGithub>
                      </button>
                    </a>
                    <a href="" className="text-center">
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Server
                        </span>
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
                  <h3 className="text-xl font-bold tracking-[0.25px]">
                    Summer Camp Playinspire Sports
                  </h3>
                  <p className="font-semibold mt-2 mb-1 tracking-[0.25px]">
                    MERN Stack Project
                  </p>
                  <p className=" tracking-[0.25px]">
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
                  <div className="flex justify-center gap-4 mt-4 mb-6">
                    <a
                      href="https://summer-camp-71b55.web.app"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Live Site
                        </span>
                        <FaLink className="hidden xl:inline"></FaLink>
                      </button>
                    </a>
                    <a
                      href="https://github.com/alif819015/summer-camp-client"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Client
                        </span>
                        <FaGithub className="hidden xl:inline"></FaGithub>
                      </button>
                    </a>
                    <a
                      href="https://github.com/alif819015/summer-camp-server"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Server
                        </span>
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
                  <h3 className="text-xl font-bold tracking-[0.25px]">
                    Toy Supper Hero
                  </h3>
                  <p className="font-semibold mt-2 mb-1 tracking-[0.25px]">
                    MERN Stack Project
                  </p>
                  <p className=" tracking-[0.25px]">
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
                  <div className="flex justify-center gap-4 mt-4 mb-6">
                    <a
                      href="https://toy-marketplace-d6ceb.web.app/"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Live Site
                        </span>
                        <FaLink className="hidden xl:inline"></FaLink>
                      </button>
                    </a>
                    <a
                      href="https://github.com/alif819015/toy-marketplace-client"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Client
                        </span>
                        <FaGithub className="hidden xl:inline"></FaGithub>
                      </button>
                    </a>
                    <a
                      href="https://github.com/alif819015/toy-marketplace-server"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Server
                        </span>
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
                  <h3 className="text-xl font-bold tracking-[0.25px]">
                    Chinese Chef
                  </h3>
                  <p className="font-semibold mt-2 mb-1 tracking-[0.25px]">
                    MERN Stack Project
                  </p>
                  <p className=" tracking-[0.25px]">
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
                  <div className="flex justify-center gap-4 mt-4 mb-6">
                    <a
                      href="https://the-news-dragon-clients-8ee7e.web.app/"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Live Site
                        </span>
                        <FaLink className="hidden xl:inline"></FaLink>
                      </button>
                    </a>
                    <a
                      href="https://github.com/alif819015/chef-recipe-hunter-client"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Client
                        </span>
                        <FaGithub className="hidden xl:inline"></FaGithub>
                      </button>
                    </a>
                    <a
                      href="https://github.com/alif819015/chef-recipe-hunter-server"
                      className="text-center"
                    >
                      <button className="flex gap-1 items-center justify-center border-[1px] rounded-md px-3 py-1 md:py-2 btn-outline btn-secondary ">
                        <span className="text-[14px] md:text-[18px] tracking-[0.25px]">
                          Server
                        </span>
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
