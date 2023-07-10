import img from "../../../public/alif.png";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const resume = "/Resume.pdf";

const Banner = () => {
  const downloadResume = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  };

  return (
    <div id="home" className="banner hero min-h-screen">
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content">
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          <div className="md:px-10 sm:px-2 px-4 md:my-auto">
            <h1 className="mb-5 text-5xl font-bold">
              <span>
                Hi! <span className="text-[#da08a2]">I</span> 'm
              </span>
            </h1>
            <h1 className="mb-5 text-5xl font-bold">
              <span>
                <span>Mahmud </span>
                <span className="text-[#da08a2]">Hasan</span>
              </span>
            </h1>
            <p className="mb-5">
              I'm a computer science student and a passionate MERN stack
              developer. I create dynamic web applications with a focus on
              MongoDB, Express.js, React, and Node.js. I love collaborating with
              teams and staying up-to-date with web development trends.
            </p>
            <button
              onClick={() => {
                downloadResume(resume);
              }}
              className="btn btn-secondary uppercase"
            >
              download resume
              <FaDownload className="animate-bounce"></FaDownload>
            </button>
            <div className="flex gap-4 mt-4 text-2xl text-[#da08a2] ml-6">
              <a
                className=""
                href="https://www.facebook.com/mahmud.hassan.140193"
              >
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://github.com/alif819015">
                <FaGithub></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/mahmud-hassan-alif-49baba1a0/">
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
          </div>
          <div className="animetion avatar flex justify-center animate-pulse">
            <div className="w-80 rounded-full ring ring-offset-[#da08a2] ring-inset ring-offset-2">
              <img className="" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
