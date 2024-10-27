import bannerImage from "../assets/b1.png";
import bannerBackground from "../assets/react.png";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Android Developer","Frontend Developer","Backend Developer"], 
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  },[])


    return ( 
    <div
   style={{
    backgroundImage: `url(${bannerBackground})` ,
    backgroundSize: "cover" ,
   }}
    className="main-container flex h-full items-center">
        {/*first box*/}
        <div className="w-full flex items-center justify-center text-white">
            {/*text*/}
           <div className="w-2/3 space-y-2 ms-10">
           <h3 className="text-3xl font-semibold">Hi, I am</h3>
            <h1 className="text-5xl font-bold">Seema Batra</h1>
            <h2 className="text-3xl">And Iam <span className="font-bold" ref={el}></span> </h2>
            <p className=""> I am a dedicated frontend developer with a passion for crafting visually appealing and highly interactive user interfaces.With expertise in technologies like HTML, CSS, JavaScript, React, and Tailwind CSS, I focus on creating seamless, responsive websites and web applications.
            My goal is to blend design and functionality to deliver an excellent user experience while staying up-to-date with the latest frontend trends and best practices.</p>
            
            <div className="icons-container flex space-x-5">
              <a className=" hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-700">
              <i class="fa-brands text-4xl fa-facebook"></i>
              </a>

              <a className=" hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-700">
              <i class="fa-brands fa-instagram"></i>
              </a>
           
              <a className=" hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-700"> 
              <i class="fa-brands text-4xl fa-youtube"></i>
              </a>

              <a className=" hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center  bg-gray-700"> 
            <i class="fa-brands text-4xl fa-linkedin"></i>
            </a>
            </div>
            
           <br />
             <a className=" text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg" href="/contact">Contact Me</a>
        
      </div>
        {/*second box*/}

        <div className=" w-full flex justify-center"> 
              {/*image*/}
            <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage}></img>
        </div>
</div>
    </div>
    );
};
export default Banner;