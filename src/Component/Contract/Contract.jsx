import SectionContainer from "../SectionContainer/SectionContainer";
import {
  FaArrowUp,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Contract.css";
import gif from "../../../public/Contact.gif";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contract = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wogztv",
        "template_iicvh1a",
        form.current,
        "_kOHofHuXdtTPOV6S"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for reminding me",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <SectionContainer>
        <div className="text-white">
          <h3
            id="contract"
            className="text-3xl uppercase font-semibold text-center mt-16"
          >
            Contract <span className="text-purple-600"> Me!</span>
          </h3>
          <div className="grid md:grid-cols-2 mt-20">
            <div>
              <img className="w-96 mx-auto mb-5" src={gif} alt="" />
            </div>
            <div className="text-center mx-auto">
              <form className="text-black" ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email Address"
                  className="input input-bordered input-primary my-4 w-full max-w-xs"
                />
                <input
                  type="number"
                  name="from_number"
                  placeholder="Mobile Number"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <textarea
                  className="textarea textarea-primary w-full max-w-xs mt-4"
                  placeholder="Your Message"
                  name="message"
                ></textarea>
                <br />
                <input
                  className="btn bg-purple-600 mt-4"
                  type="submit"
                  value="Send Message"
                />
              </form>
              <div className="flex justify-center gap-4 mt-4 text-3xl text-purple-600 ml-6">
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
                <a href="https://www.instagram.com/mahmudhasanalif/">
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <a className="mx-auto" href="#home">
            <FaArrowUp className="arrow animate-bounce text-white bg-purple-600 rounded-md text-3xl "></FaArrowUp>
          </a>
        </div>
      </SectionContainer>
      <footer className="footer footer-center p-4 bg-gray-800 text-white">
        <div>
          <p>Copyright © 2023 - All right reserved by Mahmud Hasan</p>
        </div>
      </footer>
    </div>
  );
};

export default Contract;
