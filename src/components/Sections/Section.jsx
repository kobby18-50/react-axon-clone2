import { SiDiscord } from "react-icons/si";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Discover from "./Discover/Discover";
import Solutions from "./LastSection/Solutions"
import ROI from "./LastSection/ROI";

const Section = () => {
  const sections = [
    {
      title: "accelerate",
      text: "your business growth with our proven development framework and achieve zero latency",
    },

    {
      title: "scale",
      text: "your company's capabilities by decreasing technology costs without losing high quality",
    },

    {
      title: "sustain",
      text: "the top business level with our self-sustainable infrastructure and delivery centers",
    },
  ];

  const logos = [
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
    { logo: <SiDiscord /> },
  ];

  const badges = [
    {
        title : 'Tech Strategy & Product Consulting',
        text : 'Designed to help your organization to achieve tangible, measurable outcomes, from aligning your product strategy with your technology strategy to resolving existing product pain points and goals',
        lists : [
            {list : 'Tech Project Review'},
            {list : 'Vendor Transfer'},
            {list : 'Product Scaling'},
            {list : 'Business Growth'},
        ]
    },

    {
        title : 'Web & Mobile Development',
        text : 'With over 10 years of industry expertise and deep knowledge of web and mobile technologies, AXON software company builds secure and cross-platform apps, custom websites, marketplaces and digital platforms',
        lists : [
            {list : 'MVP Development'},
            {list : 'SaaS Development'},
            {list : 'PoS Development'},
            {list : 'UI/UX Design'},
        ]
    },

    {
        title : 'AI & ML Development',
        text : 'Whether you need to analyze large data sets, optimize workflows, create virtual assistants or computer vision project, we have the experience to deliver cutting-edge AI solutions that transform your business.',
        lists : [
            {list : 'Image Recognition'},
            {list : 'Social Intelligence'},
            {list : 'AI Chatbots'},
            {list : 'Data Services'},
        ]
    },
    


  ]
  return (
    <>
      <div className="lg:mx-[100px] sm:mx-[30px]">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-7 md:mt-[80px] sm:my-[100px]">
          {sections.map((section, index) => (
            <div key={index}>
              <h1 className="font-semibold text-2xl pb-7">{section.title} -</h1>
              <p className="">{section.text}</p>
            </div>
          ))}
        </div>

        {/* trusted by */}

        <div className="">
          <h1 className="text-center text-2xl">TRUSTED BY</h1>
          <div className="flex space-x-5 overflow-x-scroll">
            {logos.map((logo, index) => (
              <div key={index}>
                <div className="text-[100px] my-3 transition duration-0 hover:duration-300 ease-in-out">
                  {logo.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* badges */}

      <div className="lg:mx-[100px] sm:mx-[30px]">
        <span>
          <SiDiscord />
        </span>

        {/* title */}
        <div className="">
          <h3 className="uppercase text-buttonColor text-lg font-semibold py-7">
            unlocking your software vision
          </h3>
          <div>

        

          <h1 className="font-bold text-3xl py-8">Software development services we provide</h1>

          <div className=" ">

            {
                badges.map((badge, index) => (
                    <div key={index}  className="hover:text-buttonColor  hover:duration-500 grid md:grid-cols-3 sm:grid-cols-1 gap-3 hover:rounded-lg hover:bg-gradient-to-r hover:from-pink-100 hover:via-white hover:to-pink-300 p-3 my-10">
                        <h1 className="font-bold text-3xl">{badge.title}</h1>
                       <div>
                       <p className="text-black">{badge.text}</p>
                        <ul className="list-disc pl-5 text-buttonColor grid md:grid-cols-2 sm:grid-cols-1 pt-5">
                            {badge.lists.map((list, index) => (
                                <li key={index} className="font-semibold">{list.list}</li>
                            ))}
                        </ul>
                       </div>
                                <div className="flex space-x-2 mt-16">
                                <span>Explore more</span>
                                <span className="pt-1 text-lg">
                                    <HiOutlineArrowNarrowRight/>
                                </span>
                                </div>
                    </div>
                ))
            }

            
        
          </div>

          {/* 2 */}

          <Discover/>

          
          </div>
        </div>
      </div>

          <div className=""> 
          <Solutions/>
          </div>

          <div className="">
            <ROI/>
          </div>
    </>
  );
};

export default Section;
