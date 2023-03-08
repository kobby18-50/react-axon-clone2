import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TbDatabase, TbDatabaseExport, TbFileDatabase } from "react-icons/tb";
import Fintech from "../../../assets/fintech.png";
import Health from "../../../assets/health.png";
import Automate from "../../../assets/successTwo.png";
import Doc from "../../../assets/doctor.png";
import SuccessStory from "./SuccessStories/SuccessStory";
import CardImg from "../../../assets/card.jpg";
import { BsArrowUpRight } from "react-icons/bs";

const ROI = () => {
  const ROIs = [
    {
      logo: <TbDatabase />,
      title: "Data Management and Strategy",
      text: "Full potential of the usage of your Data is a result of a properly built Data Strategy and correct Data Architecture design within your software ecosystem.",
    },

    {
      logo: <TbFileDatabase />,
      title: "Data Visualization & Consulting",
      text: "Data Access strategy ends with properly set Data Visualisations platforms, consuming critical data from the organizational sources",
    },

    {
      logo: <TbDatabaseExport />,
      title: "Data Migration",
      text: "Data Migration is a pain-point in most of the businesses and slows down the decision about any software infrastructure related changes.",
    },
  ];

  const expertises = [
    {
      title: "We've mastered building the right fintech product",
      lists: [
        { list: "Finace apps" },
        { list: "Banking software" },
        { list: "Blockchain solutions" },
        { list: "Trading platfoms" },
        { list: "Crowdfunding platforms" },
        { list: "Explore our" },
      ],
      img: Fintech,
    },

    {
      title: "We've mastered building the right fintech product",
      lists: [
        { list: "Finace apps" },
        { list: "Banking software" },
        { list: "Blockchain solutions" },
        { list: "Trading platfoms" },
        { list: "Crowdfunding platforms" },
        { list: "Explore our" },
      ],
      img: Health,
    },

    {
      title: "We've mastered building the right fintech product",
      lists: [
        { list: "Finace apps" },
        { list: "Banking software" },
        { list: "Blockchain solutions" },
        { list: "Trading platfoms" },
        { list: "Crowdfunding platforms" },
        { list: "Explore our" },
      ],
      img: Automate,
    },
  ];

  const products = [
    {
      img: Doc,
      title: "We're ready to go",
      text: "We’ve have created a unique suite of Accelerators that combine AI, ML, proven methodologies, and frameworks so we can make a big difference very quickly, significantly more cost effectively",
    },

    {
      img: Doc,
      title: "We're proven",
      text: "We’ve already created over $1bn+ of value, predominantly in a Start-up or Scale-up scenario – we know the support you need at the moment you need it",
    },

    {
      img: Doc,
      title: "We're with you",
      text: "It’s a partnership, realising your brilliance at the expense of your  competitors, we bring the energy and focus needed to help you scale in the way that’s right for you ",
    },

    {
      img: Doc,
      title: "We've been there",
      text: "We know what it’s like to go through hyper-scale, we’ve done it collectively many, many times over. We’re by your side, at the coal-face and in the boardroom",
    },
  ];

  const newcards = [
    {
      img: CardImg,
      date: "01.03.2023",
      text: "How to Build a Fintech Mobile App in 2023: A Step-by-Step Guide",
    },

    {
      img: CardImg,
      date: "28.02.2023",
      text: "Tech News Digest: February Update",
    },

    {
      img: CardImg,
      date: "23.02.2023",
      text: "Pharma App Development: Types, Must-Have Features and Best Practices",
    },
  ];
  return (
    <div>
      <div className="lg:mx-[100px] sm:mx-[30px]">
        <h1 className="text-3xl font-bold">
          Strive for excellence with AXON - custom software development company
        </h1>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="my-7">
            <p>
              Check out the awards and recognition garnered by the AXON team and
              our partners.
            </p>
            <Link className="flex space-x-5 my-5 hover:text-buttonColor hover:duration-500">
              <p>Book a call with AXON expert</p>
              <span className="pt-1.5">
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>

          {/* logo */}

          <div className="grid lg:grid-cols-3 sm:grid-cols-1 my-7 text-center">
            <div className="pb-4">logo</div>
            <div className="pb-4">logo</div>
            <div>logo</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div>
            <h1 className="text-3xl font-bold">
              Achieve maximum ROI with our data services
            </h1>
            <Link className="flex space-x-5 my-5 hover:text-buttonColor hover:duration-500">
              <p>Discover Our Data Services</p>
              <span className="pt-1.5">
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>

          <div className="mt-5">
            {ROIs.map((roi, index) => (
              <div key={index}>
                <div className="flex space-x-5 pb-6">
                  <div className="border text-2xl p-2 h-[45px] rounded bg-roi text-buttonColor">
                    {roi.logo}
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">{roi.title}</h1>
                    <p>{roi.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*industry experience  */}
      <div className="border bg-discovery">
        <div className="mt-12 grid grid-cols-4 lg:ml-[100px] sm:ml-[30px]">
          <div className="col-span-3 ">
            <h1 className="text-3xl font-bold my-8">Industry expertise</h1>
            <p className="py-10">
              AXON software development agency , for more than 10 years, has
              been specializing in the development of world-class applications
              and systems for different sectors and enterprises in Retail,
              Finance, Healthcare, and other industries.
            </p>

            <ul className="my-5">
              <li>
                <span className="space-x-2">
                  <span>01</span> <span>Fintech</span>{" "}
                </span>
              </li>
              <li>
                <span className="space-x-2">
                  <span>02</span> <span>HealthTech</span>{" "}
                </span>
              </li>
              <li>
                <span className="space-x-2">
                  <span>03</span> <span>RetailTech</span>{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* expertise */}

        <div className=" lg:ml-[100px] sm:ml-[30px] my-5">
          {expertises.map((expertise, index) => (
            <div key={index}>
              <div>
                <h1>{expertise.title}</h1>

                <div>
                  {expertise.lists.map((list, index) => (
                    <ul key={index} className="list-disc ml-10 my-4">
                      <li>{list.list}</li>
                    </ul>
                  ))}
                </div>

                <figure>
                  <img src={expertise.img} alt="" />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DigitalProducts */}

      <div className=" border bg-color4 text-white">
        <div className="lg:mx-[150px] sm:mx-[30px]">
          <h1 className="text-center font-bold text-3xl py-16">
            AXON scales Digital Products fast and sustainable since 2011
          </h1>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-[300px]">
            <div>
              <p className="my-5">
                AXON, as a Digital Native Company, leverages deep expertise
                across multiple industries, including highly regulated ones
              </p>
              <p>
                Headquatered in Accra (Ghana), AXON has presence in Gambia and
                Sierra Leone
              </p>
            </div>

            <div className="my-5">
              <h1 className="pb-5 r text-sm">
                RECOGNIZED AS STRATEGIC PARTNER BY
              </h1>
              <div className="flex gap-[10px]">
                <div className="border rounded-lg bg-color4 w-[170px] h-[70px] text-center text-buttonColor p-5">
                  <span>GRA</span>
                </div>

                <div className="border rounded-lg bg-color4 w-[170px] h-[70px] text-center text-buttonColor p-5">
                  <span>GRA</span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-3">
            {products.map((product, index) => (
              <div key={index}>
                <div>
                  <figure>
                    <img src={product.img} alt="" />
                  </figure>
                  <div className="border-b-2 border-black py-3 rounded-lg" />

                  <div className="pt-3">{product.title}</div>
                  <div>{product.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/*  */}

          <div className="mt-20 rounded-t-lg bg-gradient-to-r from-[#0369ff] to-[#30c3f6] p-7 sm:h-[450px] lg:h-auto">
            <h1 className="text-center text-3xl font bold my-5">
              {" "}
              We are certified and skilled professionals
            </h1>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:mx-[60px] sm:mx-1.5 absolute gap-8">
              <div className="flex lg:flex-row sm:flex-col border border-black text-black -mt-1 gap-10 bg-white p-6 rounded-lg lg:w-[500px] h-auto sm:w-[270px]">
                <figure>
                  <img src={Doc} alt="doc" />
                </figure>
                <div className="">
                  <h1>ISO 9001:2015</h1>
                  <p className="font-semibold">Quality management system</p>
                </div>
              </div>

              <div className="flex lg:flex-row sm:flex-col border border-black text-black -mt-1 gap-10 bg-white p-6 rounded-lg sm:w-[270px] lg:w-[500px]">
                <figure>
                  <img src={Doc} alt="doc" />
                </figure>
                <div className="">
                  <h1>ISO 9001:2015</h1>
                  <p className="font-semibold">Quality management system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* success stories */}
      <div className="mt-40  lg:mx-[100px] sm:mx-[30px]">
        <h1 className="font-bold text-3xl mb-10">Check the latest success stories</h1>

        <SuccessStory />
      </div>

      {/* finals before footer */}
              <div className="bg-[#f3f5f4] p-7">
              <div className="mt-10 text-3xl font-bold">
        <h1 className="lg:ml-20 sm:ml-[30px] my-10">What's new</h1>
      </div>

      {/*  */}

      <div className=" lg:ml-[160px] sm:ml-[20px] grid lg:grid-cols-3">
        {
          newcards.map((card, index)=> (
            <div key={index} className="card w-[350px] rounded-none hover:shadow-lg hover:duration-500 hover:cursor-pointer p-3 hover:bg-white">
              <figure>
                <img src={CardImg} alt="" />
              </figure>

              <div className="card-body">
                <p className="text-sm">{card.date}</p>
                <p className="text-xl">{card.text}</p>

                <div className="flex space-x-2">
                <div>
                  <BsArrowUpRight/>
                </div>
                <div>
                  Read more
                </div>
              </div>
              </div>

              

            </div>
          ))
        }
      </div>
              </div>
      
    </div>
  );
};

export default ROI;
