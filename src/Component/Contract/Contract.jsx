import SectionContainer from "../SectionContainer/SectionContainer";
import {
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
            Contract <span className="text-[#da08a2]"> Me!</span>
          </h3>
          <div className="grid md:grid-cols-2 mt-20">
            <div>
              <img className="w-96 mx-auto mb-5" src={gif} alt="" />
            </div>
            <div className="text-center bg-gray-800 mx-auto rounded-xl md:mx-28 py-10">
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
                  className="btn btn-outline btn-secondary mt-4"
                  type="submit"
                  value="Send Message"
                />
              </form>
              <div className="flex justify-center gap-4 mt-4 text-3xl text-[#da08a2] ml-6">
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
      </SectionContainer>
    </div>
  );
};

export default Contract;
