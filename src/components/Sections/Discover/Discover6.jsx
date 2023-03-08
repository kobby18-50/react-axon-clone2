import Img from "../../../assets/dic6.svg";
import { VscQuote } from "react-icons/vsc";
import Ghana from "../../../assets/ghana.png";

const Discover6 = () => {
  return (
    <div className="pt-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
      <div>
        <span className="text-2xl text-buttonColor">
          <VscQuote />
        </span>
        <p className="font-bold text-xl">
          "The website that Altamira (formerly GBKSOFT) has generated now allows
          the company to save time and manpower as it performs a lot of tasks
          that other employees are used to doing. The team members' seamless
          approach to project management and their communication skills continue
          to make this collaboration productive."
        </p>

        <div className="flex gap-5 pt-5">
          <figure>
            <img src={Img} alt="CTO" className="rounded-full w-20" />
          </figure>
          <span className="">
            <p>Project manager</p>
          </span>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-5 py-5">
        <div>
          <div className="flex gap-3 py-7">
            <figure>
              <img
                src={Ghana}
                alt="gh"
                className="w-8 border-1 bg-white p-0.5 rounded-full"
              />
            </figure>
            <div className="border-1 bg-white rounded-lg p-1 font-semibold">
              Retail
            </div>
            <div className="border-1 bg-white rounded-lg p-1 font-semibold">
              Order Management System
            </div>
          </div>

          <div>
            <p>
              Resigned web solution for a large-scale printing company that
              provides a modern order management system and enables customer
              experience.
            </p>
            <p className="pt-5">Services we provided</p>
            <ul className="list-disc pl-5 py-5">
              <li>Web application development</li>
              <li>UX/UI Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover6;
