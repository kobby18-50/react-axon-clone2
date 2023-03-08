import { useState } from "react";
import { Link } from "react-router-dom";
import Discover1 from './Discover1'
import Discover2 from './Discover2'
import Discover3 from './Discover3'
import Discover4 from './Discover4'
import Discover5 from './Discover5'
import Discover6 from './Discover6'

const Discover = () => {
  const activeStyle = "border-b-4 border-blue-800 pb-1 absolute";

  const [filter, setFilter] = useState("successOne");
  return (
    <div>
      <div className="">
        <span className="text-3xl font-bold pt-2">
          Discover why customers choose AXON
        </span>
        <p className="py-4">
          See how we help clients to realize their product and technology
          ambition
        </p>

        {/* Links */}

        <ul className="grid lg:grid-cols-6 lg:gap-4 sm:grid-cols-6 sm:gap-[100px] sm:overflow-x-scroll lg:overflow-x-hidden lg:overflow-y-hidden border-b-2 border-black pb-2">
          <li>
            <Link
              onClick={() => setFilter("successOne")}
              className={`${filter === "successOne" ? activeStyle : ""}`}
            >
              Discover1
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setFilter("successTwo")}
              className={`${filter === "successTwo" ? activeStyle : ""}`}
            >
              Discover2
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setFilter("successThree")}
              className={`${filter === "successThree" ? activeStyle : ""}`}
            >
              Discover3
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setFilter("successFour")}
              className={`${filter === "successFour" ? activeStyle : ""}`}
            >
              Discover4
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setFilter("successFive")}
              className={`${filter === "successFive" ? activeStyle : ""}`}
            >
              Discover5
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setFilter("successSix")}
              className={`${filter === "successSix" ? activeStyle : ""}`}
            >
              Discover6
            </Link>
          </li>
        </ul>
        {filter === 'successOne' && <Discover1/>}
        {filter === 'successTwo' && <Discover2/>}
        {filter === 'successThree' && <Discover3/>}
        {filter === 'successFour' && <Discover4/>}
        {filter === 'successFive' && <Discover5/>}
        {filter === 'successSix' && <Discover6/>}
      </div>


    <div className="mt-[70px]">
     <div className="text-3xl font-bold">
     <p>Ready to make your vision a reality?</p>
      <p>Let us help you get there!</p>
     </div>

     <div className=" p-10 rounded-xl my-14 shadow-2xl">

      
        <form>
          <section className="lg:flex lg:space-x-8">
          <div>
          <label className="font-semibold">Email *</label><br />
          <input type="text" name="" id="" className="border p-2 rounded-[15px] lg:w-[300px] sm:w-[250px]" required />
        </div>

        <div>
          <label className="font-semibold">How we can help you? *</label><br />
          <input type="text" placeholder="Please, briefly describe your project or ask us anything" id="" className="border  p-2 rounded-[15px] lg:w-[800px] sm:w-[250px]" required />
        </div>
          </section>

         <div className="lg:flex lg:justify-between mt-4 ">
          <div className="space-x-5">
          <span><input type="checkbox" className="checkbox w-[20px] h-[20px] rounded-none" /></span>
          <span><label>I agree with AXON <Link className="text-blue-700">Privacy Policy *</Link></label></span>
          </div>
          <div>
          <button className="btn rounded-[50px] border-buttonColor bg-buttonColor text-white hover:bg-black hover:text-white hover:border hover:border-buttonColor ml-[45px]"><span className="">Send Message</span></button>
          </div>
         </div>
        <div>

        </div>
        
        </form>
      

     </div>
    </div>
    </div>
  );
};

export default Discover;
