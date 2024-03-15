import HeroImage from "../assets/HeroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center md:justify-center  h-full px-4  md:flex-row">
          <div className="flex flex-col justify-center h-full ">
            <h2 className="text-5xl sm:text-7xl font-bold text-white ">
              I'm a frontend developer
            </h2>
            {/* <p className="text-gray-500 py-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae
              temporibus consectetur vero velit dolorem libero quam nobis
              perferendis atque!
            </p> */}
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full object-cover z-50"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
