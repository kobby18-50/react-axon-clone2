import Img from "../../../assets/disc5.png";
import { VscQuote } from "react-icons/vsc";
import Ghana from "../../../assets/ghana.png";

const Discover5 = () => {
  return (
    <div className="pt-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
      <div>
        <span className="text-2xl text-buttonColor">
          <VscQuote />
        </span>
        <p className="font-bold text-xl">
          "Unique mobile application that aims to teach users to play golf
          according to individual playing styles and recommendations provided by
          specifically developed algorithms."
        </p>

        <div className="flex gap-5 pt-5">
          <figure>
            <img src={Img} alt="CTO" className="rounded-full w-20" />
          </figure>
          <span className="">
            <span>CEO</span>
            <p>Ian Cash</p>
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
              Reatil
            </div>
            <div className="border-1 bg-white rounded-lg p-1 font-semibold">
              IoT
            </div>
          </div>

          <div>
            <p>
              Unique mobile application that aims to teach users to play golf
              according to individual playing styles and recommendations
              provided by specifically developed algorithms.
            </p>
            <p className="pt-5">Services we provided</p>
            <ul className="list-disc pl-5 py-5">
              <li>Mobile application development</li>
              <li>UX/UI Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover5;
