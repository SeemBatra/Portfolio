import React from 'react'
import bannerBackground from "../assets/react.png";
const Expertise = () => {
    return (
        <>
        <div className="mt-2">
           
            <h1 className=" mb-16 text-5xl font-bold underline text-center">
                My Expertise
                </h1>
                {/*box section*/}
                <div 
                 style={{
                    backgroundImage: `url(${bannerBackground})` ,
                    backgroundSize: "cover" ,
                   }}
                className="box-container items-center flex py-16">
                    <div className="flex text-white justify-center">
                        {/*text section*/}
                       <div className="w-2/3 text-center space-y-4">
                        <h1 className="text-4xl font-bold">I love these technologies</h1>
                        <p>"I love working with technologies like React and Tailwind CSS because they allow me to bring ideas to life with speed, flexibility, and creativity."</p>
                        <button className=" text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">Hire Me</button>
                  </div> </div>
                    <div className="flex justify-center">
                        {/*skills section*/}
                        <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Core Java</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">J2EE</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Hibernate(ORM Tool)</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Spring Framework</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Spring Boot Framework</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1  rounded-full hover:bg-orange-500 cursor-pointer">Spring Security</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Javascript</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">ReactJS</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">NextJS</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Tailwind CSS</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Angular</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">State Management</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">AWS Cloud</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">EC2</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Depolying on cloud</p>
                    
                     </div>
                    </div>

                </div>
        </div>
        </>
    );
};
export default Expertise;