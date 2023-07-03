import img from "../../../public/alif.png";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const resume = "http://localhost:5173/../../../public/Resume.pdf";
const Banner = () => {
  const downloadResume = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div id="home" className="banner hero min-h-screen">
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content">
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          <div className="md:px-10 sm:px-2 px-4 md:my-auto">
            <h1 className="mb-5 text-5xl font-bold">
              <span>Hi! <span className="text-purple-600">I</span> 'm</span>
            </h1>
            <h1 className="mb-5 text-5xl font-bold}">
              <span><span className="text-purple-600">M</span>ah<span className="text-purple-600">mu</span>d <span className="text-purple-600">H</span>asa<span className="text-purple-600">n</span></span>
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
              className="btn btn-primary uppercase"
            >
              download resume
              <FaDownload className="animate-bounce"></FaDownload>
            </button>
            <div className="flex gap-4 mt-4 text-2xl text-purple-600 ml-6">
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
            <div className="w-80 rounded-full ring ring-offset-purple-600 ring-inset ring-offset-2">
              <img className="" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
