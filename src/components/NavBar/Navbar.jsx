import BgImg from "../../assets/pic1.jpg";
import { Link } from "react-router-dom";
import ImgData from "./ImgData";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import MobileNav from "./MobileNav";
import { useState } from "react";


const Navbar = () => {

  const [color, setColor] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  return (
    <>
      <div className={color ? "sm:hidden lg:flex navbar text-white fixed bg-black duration-500 pl-10 p-3" : "sm:hidden lg:flex navbar absolute bg-transparent text-white p-3"}>
        <div className="flex-1">
          
          <Link className="btn btn-ghost normal-case text-xl">AXON</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <Link className="hover:text-buttonColor duration-300">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link className="text-black">Submenu 1</Link>
                </li>
                <li>
                  <Link className="text-black">Submenu 2</Link>
                </li>
              </ul>
            </li>

            <li tabIndex={0}>
              <Link className="hover:text-buttonColor duration-300">
                Expertise
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link className="text-black">Submenu 1</Link>
                </li>
                <li>
                  <Link className="text-black">Submenu 2</Link>
                </li>
              </ul>
            </li>

            <li tabIndex={0}>
              <Link className="hover:text-buttonColor duration-300">
                Products
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link className="text-black">Submenu 1</Link>
                </li>
                <li>
                  <Link className="text-black">Submenu 2</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="hover:text-buttonColor duration-300">
                Our Work
              </Link>
            </li>
            <li>
              <Link className="hover:text-buttonColor duration-300">Blog</Link>
            </li>
            <li>
              <Link className="hover:text-buttonColor duration-300">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-buttonColor duration-300">
                Contact
              </Link>
            </li>

            <div className="btn rounded-[50px] border-buttonColor bg-buttonColor text-white hover:bg-transparent hover:text-buttonColor hover:border hover:border-buttonColor">
              Get in touch
            </div>
          </ul>
        </div>
      </div>

    {/* mobile nav */}
      <div className="lg:hidden sm:flex">
        <MobileNav/>
      </div>

      <figure>
        <img src={BgImg} alt="bg" className="bg-cover lg:h-[600px] sm:h-[800px] w-full" />
        <ImgData />
      </figure>

      <p className="lg:hidden sm:flex">
      <button className="btn rounded-[50px] border-buttonColor bg-buttonColor text-white hover:bg-black hover:text-white hover:border hover:border-buttonColor mt-7 space-x-5 ml-[25%]"><span className="">Get Started</span><span className="text-[20px]"><HiOutlineArrowNarrowRight/></span></button>
      </p>
    </>
  );
};

export default Navbar;
