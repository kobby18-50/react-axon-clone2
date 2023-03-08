import CarImg from "../../../assets/carimg.png"
import Damage from "../../../assets/carlo.png"
import Medic from "../../../assets/doctor.png"
import Obj from "../../../assets/infinite.png"


const Solutions = () => {

    const carAI = [
        {
            title : 'Car Damage Recognition',
            img : Damage,
        },

        {
            title : 'Medical Image Recognition',
            img : Medic,
        },

        {
            title : 'Object Recognition',
            img : Obj,
        },


    ]
    return ( 
        <div className="my-10 bg-color3 text-white">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="lg:mx-[100px] sm:ml-2">
                <p className="uppercase my-14 font-semibold">using artificial intelligence for image Recognition</p>
                <p className="capitalize font-bold text-4xl mb-8">image recognition software development</p>

                <p className="my-5">
                AXON technologies lab is at the forefront of the digital transformation revolution with our innovative image recognition technology.
                </p>
                
                <p>
                Image recognition technology is gaining momentum in the business area. It brings colossal digital transformation to a number of business industries covering automotive, healthcare, manufacturing, retail, and others.
                </p>


                <div className="my-14">
                    {
                        <div>
                            { carAI.map((car,index) => (
                                <div key={index}>
                                   <div className="border lg:w-96 p-5 my-7 rounded-lg bg-color4 mx-1">
                                   <div className="flex sm:flex-row space-x-5">
                                    <span>
                                    <figure className={`border rounded-lg lg:p-2 bg-slate-100`}>
                                        <img src={car.img} alt="" />
                                    </figure>
                                    </span>
                                   <span className="pt-5">{car.title}</span>
                                   </div>
                                   </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>

                <button className="my-10 sm:w-full lg:w-48 btn rounded-[50px] border-buttonColor bg-buttonColor text-white hover:bg-black hover:text-white hover:border hover:border-buttonColor mt-7 space-x-5"><span className="">Explore Solutions</span></button>


            </div>

            <figure>
                <img src={CarImg} alt="carimg" />
            </figure>
            </div>
        </div>
     );
}
 
export default Solutions;