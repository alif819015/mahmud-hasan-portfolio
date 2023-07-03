import SectionContainer from "../SectionContainer/SectionContainer";
import img from "../../../public/alif6.jpg";

const About = () => {
  return (
    <div className="text-white">
      <SectionContainer>
        <h3 className="uppercase text-3xl font-semibold mt-20 text-center text-white">
          about <span className="text-purple-600">me</span>
        </h3>
        <div className="mt-10">
          <div className="avatar flex justify-center ">
            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <p className="mt-5 px-5 md:px-20">
            Hello, I'm Mahmud Hasan, a passionate and dedicated frontend web
            developer. I did my Bachelor's Degree in Computer Science and
            Engineering from Yunnan University in China. My journey into the
            world of programming began when I discovered my love for creating
            visually appealing and interactive websites.To further enhance my
            Skill, I enrolled in the "Programming Hero" Course, where I
            completed the web development curriculum and obtained a certificate.
            This course provided me with comprehensive knowledge and practical
            experience, enabling me to tackle real-world projects with
            confidence. When I'm not coding, you can find me indulging in my
            hobbies. I am an avid Video game enthusiast. I'm also a big fan of
            anime series and appreciate the artistry and storytelling in this
            medium. I am excited to embark on new projects and collaborate with
            like-minded individuals. Feel free to browse through my portfolio
            and get in touch with me if you have any inquiries or if you'd like
            to discuss potential opportunities.
          </p>
        </div>
      </SectionContainer>
    </div>
  );
};

export default About;
