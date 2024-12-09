import Navbar from "../../Components/Ui/Header"
import Img from "../../../public/banner.jpg"
import { AiFillSchedule } from "react-icons/ai";
import { MdOutlineGroups2 } from "react-icons/md";
import 'animate.css'; // Import Animate.css for animations
import ProfileContainer from "../../Components/Ui/profile"

export default function PublicPage() {
  return (
    <div className="w-full h-full text-black ">
       
       <Navbar />
       <hr />
     <div className="w-full bg-[#EBEAFF] ">
     <div className="h-96 container mx-auto relative">
        <div className=" text-center md:text-start  ml-4 xl:text-center text-[#3D3BF3] pt-0 text-lg lg:text-3xl font-bold space-y-4">
      
        <p className="animate__animated animate__zoomIn animate__delay-0.1s pt-10">
          Plan, Track, Execute —
        </p>
        
      
        <p className="animate__animated animate__zoomIn animate__delay-0.2s">
           Turning Every Task into Achievement
        </p>
      </div>
            <div className="absolute hidden sm:block w-40 h-40 lg:w-64 lg:h-64 bg-black opacity-10 left-20 top-64">
            </div>         
            <div className="absolute hidden sm:block w-40 h-40 lg:w-64 lg:h-64 bg-black opacity-10 md:left-64 lg:left-96 top-64">
            </div>
            <p className="hidden sm:block text-[#3D3BF3]  font-mono w-40 lg:w-64 font-bold p-4 pt-8 text-xl absolute left-20 top-64">
            <center><AiFillSchedule size={80} className=""/></center>
            <br></br>
            <span className="hidden lg:block">"Plan, Track, Execute — Turning Every Task into Achievement."</span>
            </p>
            <p className="hidden sm:block text-[#3D3BF3] font-mono font-bold w-40 lg:w-64 p-4 pt-8 text-xl absolute md:left-64 lg:left-96 top-64">
            <center><MdOutlineGroups2  size={80} className=""/></center>
            <br></br>
            <span className="hidden lg:block">"Effortless Collaboration, Task Management Made Simple."</span>
            </p>
            <div>
                <div style={{width:300 , height:450}} className="absolute right-20 md:right-10 top-40 md:top-10  bg-black opacity-10"></div>
                <img src={Img} className="absolute right-10 md:right-0 top-48 md:top-20" width={300} height={800}></img>
            </div>
        </div>
     </div>
     <div className="container mx-auto mt-40 h-96">
          <ProfileContainer />
     </div>
    
    </div>
  );
  
}