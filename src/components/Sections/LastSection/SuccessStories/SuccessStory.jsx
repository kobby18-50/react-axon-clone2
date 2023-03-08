import { useState } from "react";
import { Link } from "react-router-dom";
import SuccessOne from "./SuccessOne"
import SuccessTwo from "./SuccessTwo"
import SuccessThree from "./SuccessThree"
import SuccessFour from "./SuccessFour"

const SuccessStory = () => {
  const activeStyle = "border-b-4 border-[#0369ff] pb-1 absolute";

  const [filter, setFilter] = useState("successOne");
  return (
    <div>
      <div className="">
        

        {/* Links */}

        <ul className="grid lg:grid-cols-4 lg:gap-4 sm:grid-cols-4 sm:gap-[100px] sm:overflow-x-scroll lg:overflow-x-hidden lg:overflow-y-hidden border-b-2 border-black pb-2">
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
         
         
        </ul>
        {filter === 'successOne' && <SuccessOne/>}
        {filter === 'successTwo' && <SuccessTwo/>}
        {filter === 'successThree' && <SuccessThree/>}
        {filter === 'successFour' && <SuccessFour/>}
       
      </div>


   
    </div>
  );
};

export default SuccessStory;
