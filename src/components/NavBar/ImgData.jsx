import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ImgData = () => {
    return ( 
        <div className=" absolute top-[20%] lg:mx-[250px] sm:mx-[50px] text-white">
            <h1 className="text-[60px] font-bold">Creating digital products on a global scale</h1>


            <div className="sm:hidden lg:flex justify-between mt-[80px]">
                <div>
                <p>Whether you're a dynamic start-up or an established enterprise,<br /> we are here to help you reach your full potential</p>
                <button className="btn rounded-[50px] border-buttonColor bg-buttonColor text-white hover:bg-black hover:text-white hover:border hover:border-buttonColor mt-7 space-x-5"><span className="">Get Started</span><span className="text-[20px]"><HiOutlineArrowNarrowRight/></span></button>
                </div>
                
                <div>
                    <span>
                    <p className="text-xl">WE'RE CERTIFIED</p>
                    <p className="text-sm">SOFTWARE DEVELOPMENT COMPANY</p>
                    </span>

                    <div className="flex space-x-4">
                    <span>logo</span>
                    <span>logo</span>
                    </div>
                </div>
            </div>

            
        </div>
     );
}
 
export default ImgData;