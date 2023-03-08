import Img from "../../../assets/soj2.png";
import { VscQuote } from "react-icons/vsc";
import Ghana from "../../../assets/ghana.png";

const Discover1 = () => {
  return (
    <div className="pt-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
      <div>
        <span className="text-2xl text-buttonColor">
          <VscQuote />
        </span>
        <p className="font-bold text-xl">
          "AXON produced superlative deliverables that provide valuable
          information to guide internal operation and support sales processes.
          The team was receptive to feedback, adapting resources to ensure
          effective collaboration"
        </p>

        <div className="flex gap-5 pt-5">
          <figure>
            <img src={Img} alt="CTO" className="rounded-full w-20" />
          </figure>
          <span className="">
            <span>CTO</span>
            <p>Ryan Crawford</p>
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
              Inventory management
            </div>
            <div className="border-1 bg-white rounded-lg p-1 font-semibold">
              Retail
            </div>
          </div>

          <div>
            <p>
              Custom-made ERP solution that provides jet brokerage services to
              boost jet sales and service quality
            </p>
            <p className="pt-5">Services we provided</p>
            <ul className="list-disc pl-5 py-5">
              <li>Discovery</li>
              <li>Web application development</li>
              <li>UI/UX design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover1;
