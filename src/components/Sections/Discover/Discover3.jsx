import Img from "../../../assets/disc3.jpg";
import { VscQuote } from "react-icons/vsc";
import Ghana from "../../../assets/ghana.png";

const Discover3 = () => {
  return (
    <div className="pt-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
      <div>
        <span className="text-2xl text-buttonColor">
          <VscQuote />
        </span>
        <p className="font-bold text-xl">
          "The AXON team did an amazing job! And I was pleasantly surprised by
          how well-established processes they have."
        </p>

        <div className="flex gap-5 pt-5">
          <figure>
            <img src={Img} alt="CTO" className="rounded-full w-20" />
          </figure>
          <span className="">
            <span>Chief Technology Officer</span>
            <p>Jonathan Kopnic</p>
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
              Fintech
            </div>
            <div className="border-1 bg-white rounded-lg p-1 font-semibold">
              Live Streaming
            </div>
          </div>

          <div>
            <p>
              Web, iOS, and Android trading platform that offers advanced
              capabilities in earning by trading, selling products via the
              integrated marketplace, and conducting trading live-streaming.
            </p>
            <p className="pt-5">Services we provided</p>
            <ul className="list-disc pl-5 py-5">
              <li>Discovery</li>
              <li>Tech Vendor Audit</li>
              <li>Web and mobile application development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover3;
