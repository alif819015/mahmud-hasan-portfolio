import { IoIosArrowDropup } from "react-icons/Io";

const TopButton = () => {
const goTop =()=>{
window.scrollTo({ top: 0, right: 0, behavior: "smooth"})
}
    return (
        <div onClick={goTop}>
            <div className="flex justify-center md:justify-end md:mr-5 mt-5">
            <IoIosArrowDropup className="animate-bounce text-5xl text-[#da08a2]"></IoIosArrowDropup>
        </div>
        </div>
    );
};

export default TopButton;