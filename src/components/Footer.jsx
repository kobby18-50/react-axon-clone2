import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="bg-color4">
        <div className="grid lg:grid-cols-2 lg:mx-[200px] sm:mx-[20px] lg:gap-28 py-20">
          <div className="mt-10">
            <h1 className="text-2xl font-bold text-[#0168ff]">
              Looking forward to your message
            </h1>
            <div className="border-b-[#0168ff] border-2" />

            <ul className="list-disc ml-8 text-white my-10">
              <li>
                Our experts will get back to you within 24h for free
                consultation.
              </li>
              <li>
                All information provided is kept confidential and under NDA.
              </li>
            </ul>
          </div>

          <form className="border rounded-md p-8 bg-white mt-10">
            <div className="flex lg:flex-row sm:flex-col lg:gap-6">
              <div>
                <label>Name *</label>
                <br />
                <input
                  type="text"
                  className="focus:outline-none border-2 border-slate-300 rounded-md p-1.5 lg:w-auto sm:w-[350px]"
                  required
                />
              </div>

              <div>
                <label>Email *</label>
                <br />
                <input
                  type="email"
                  className="focus:outline-none border-2 border-slate-300 rounded-md p-1.5 lg:w-auto sm:w-[350px]"
                  required
                />
              </div>
            </div>

            <div className="my-3">
              <label>Phone</label>
              <br />
              <input
                type="text"
                className="focus:outline-none border-2 border-slate-300 rounded-md p-1.5 lg:w-[416px] sm:w-[350px]"
              />
            </div>

            <div>
              <label>How can we help you? *</label>
              <br />
              <textarea
                cols="30"
                rows="3"
                className="focus:outline-none border-2 border-slate-300 rounded-md p-1.5 lg:w-[416px] sm:w-[350px]"
                required
              />
            </div>

            <div className="flex space-x-2">
              <input type="checkbox" name="" id="" />
              <label>
                I agree with <Link>AXON Privacy Policy</Link>
              </label>
            </div>

            <div className="ml-[140px] mt-5 btn rounded-[50px] border-buttonColor bg-buttonColor text-white hover:bg-buttonColor hover:text-white sm:w-[180px] ">
              Get in touch
            </div>
          </form>
        </div>
      </div>

      <div className="footer grid grid-cols-4 p-10 px-[100px] bg-[#000a19] text-white">
        <div>
          <span className="footer-title">Services</span><br />
          <Link clLinkssName="link link-hover">Accelerate Development</Link>
          <Link className="link link-hover">MVP Development</Link>
          <Link className="link link-hover">SaaS Product Development</Link>
          <Link className="link link-hover">
            Cross Platform App Development
          </Link>
          <Link className="link link-hover">Data Landscape Solutions</Link>
          <Link className="link link-hover">Node js Development</Link>
          <Link className="link link-hover">Offshore Development Services</Link>
          <Link className="link link-hover">Team Augumentation</Link>
          <Link className="link link-hover">Dedicated Development Team</Link>
        </div>
        <div>
          <span className="footer-title">Industries</span><br />
          <Link className="link link-hover">Fintech & Finance</Link>
          <Link className="link link-hover">Insutech</Link>
          <Link className="link link-hover">Healthcare</Link>
          <Link className="link link-hover">Proptech</Link>
        </div>
        <div>
          <span className="footer-title">AXON Overview</span><br />
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Insights</Link>
          <Link className="link link-hover">Case studies</Link>
          <Link className="link link-hover">Terms and Conditions</Link>
          <Link className="link link-hover">Privacy Policy</Link>
        </div>
        <div>
          <span className="footer-title">Contact Us</span><br />
          <Link className="link link-hover">sales@axon.net</Link>
          <Link className="link link-hover">GH: +233 982 7379 23</Link>
          <Link className="link link-hover">Graphic Road, Accra</Link>
        </div>
        
      </div>
<div className="bg-[#000a19] text-white footer px-[100px]">
<div>
          <span className="footer-title">Competencies</span><br />
          <Link className="link link-hover">IoT Development</Link>
          <Link className="link link-hover">POS Development</Link>
          <Link className="link link-hover">Image Recognition Software Development</Link>
          <Link className="link link-hover">AI development</Link>
          <Link className="link link-hover">Discovery Stage</Link>
          <Link className="link link-hover">UI/UX Product Design</Link>
          <Link className="link link-hover">ERP Devlopment</Link>
        </div>

        <div>
          <span className="footer-title">Our Products</span>
          
          <Link className="link link-hover border p-2 w-56 rounded flex justify-between">
            <span > IoT Development</span>
            <span className="text-lg  bg-slate-700 rounded "> <IoIosArrowForward/> </span>
            </Link>

            <Link className="link link-hover border p-2 w-56 rounded flex justify-between">
            <span > IoT Development</span>
            <span className="text-lg  bg-slate-700 rounded "> <IoIosArrowForward/> </span>
            </Link>

            <Link className="link link-hover border p-2 w-56 rounded flex justify-between">
            <span > IoT Development</span>
            <span className="text-lg  bg-slate-700 rounded "> <IoIosArrowForward/> </span>
            </Link>
        </div>
</div>
<div className="bg-[#000a19]">
<div className="divider mt-0 mb-0 "></div>
        <h1 className="text-white pl-[100px]">axoninfosystems.net &copy; Copyright 2023</h1>

      <div />
</div>
    </footer>
  );
};

export default Footer;
