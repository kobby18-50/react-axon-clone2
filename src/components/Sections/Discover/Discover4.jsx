import Img from "../../../assets/disc4.jpeg";
import { VscQuote } from "react-icons/vsc";
import Ghana from "../../../assets/ghana.png";

const Discover4 = () => {
  return (
    <div className="pt-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
      <div>
        <span className="text-2xl text-buttonColor">
          <VscQuote />
        </span>
        <p className="font-bold text-xl">
          "The team’s communication practices made for a rapid yet stable
          exchange of information, allowing for the quick resolution of all
          issues that arose during development."
        </p>

        <div className="flex gap-5 pt-5">
          <figure>
            <img src={Img} alt="CTO" className="rounded-full w-20" />
          </figure>
          <span className="">
            <span>IT Solution Leader</span>
            <p>Dusan Barus</p>
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
              Healthcare
            </div>
            <div className="border-1 bg-white rounded-lg p-1 font-semibold">
              Business Automation
            </div>
          </div>

          <div>
            <p>
              Unique mobile solution that automates the process of uploading,
              transferring, documenting, numbering, and downloading pictures.
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

export default Discover4;
