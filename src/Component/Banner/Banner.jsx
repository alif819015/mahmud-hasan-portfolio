import img from "../../../public/alif.webp";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionContainer from "../SectionContainer/SectionContainer";

const resume = "/Resume_Mahmud_Hasan_+8801646154609.pdf";

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
      <div className="hero-content px-0 text-neutral-content">
        <SectionContainer>
          <div className="grid md:grid-cols-2 gap-8 mt-5 md:mt-14 ">
            <div className="sm:px-4 md:px-0 md:my-auto ">
              <h1 className="mb-5 text-4xl md:text-5xl font-bold">
                <span>
                  Hi! <span className="text-[#da08a2]">I</span>m
                </span>
              </h1>
              <h1 className="mb-5 text-4xl md:text-5xl font-bold">
                <span>
                  <span>Mahmud </span>
                  <span className="text-[#da08a2]">Hasan</span>
                </span>
              </h1>
              <p className="mb-5 text-sm md:text-base tracking-[0.25px]">
                I have completed my graduation degree in Computer Science and
                Technology. As a Full stack developer, I have created some
                dynamic websites based on ReactJs, MongoDB, Express js, and Node
                js. I love collaborating with teams and staying up-to-date with
                web development trends.
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
                <a href="https://www.linkedin.com/in/mahmudhasan819015/">
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>

            <div className="avatar flex justify-center">
              <div className="w-[80%] rounded-full ring ring-offset-[#da08a2] ring-inset ring-offset-2">
                <img
                  className="rounded-full"
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Banner;
