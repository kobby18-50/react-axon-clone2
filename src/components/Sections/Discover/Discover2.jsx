import Img from '../../../assets/disc2.png'
import { VscQuote } from "react-icons/vsc";
import Ghana from "../../../assets/ghana.png"


const Discover2 = () => {
    return ( 
        <div className="pt-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
          <div>
          <span className="text-2xl text-buttonColor"><VscQuote/></span>
           <p className="font-bold text-xl">"I am absolutely satisfied with how my app looks and functions. It is exactly what I wanted to get when I decided to go with this team"
           </p>

           <div className='flex gap-5 pt-5'>
            <figure>
                <img src={Img} alt="CTO"  className='rounded-full w-20'/>
            </figure>
            <span className=''>
                <span>CEO & Co-founder</span>
                <p>Barry Alexander</p>
            </span>
           </div>
          </div>

          <div className='bg-slate-100 rounded-lg p-5 py-5'>
            <div>
                <div className="flex gap-3 py-7">
                    <figure>
                        <img src={Ghana} alt="gh" className='w-8 border-1 bg-white p-0.5 rounded-full' />
                    </figure>
                    <div className='border-1 bg-white rounded-lg p-1 font-semibold'>Retail</div>
                    <div className='border-1 bg-white rounded-lg p-1 font-semibold'>Booking App</div>
                </div>

                <div>
                    <p>Android and iOS native applications that provide on-demand drone services, where users can connect with couriers and track the status of their drone order delivery</p>
                    <p className='pt-5'>Services we provided</p>
                    <ul className='list-disc pl-5 py-5'>
                        <li>Mobile application development</li>
                        <li>UI/UX design</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
     );
}
 
export default Discover2;