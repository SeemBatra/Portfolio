import React from 'react'
import bannerImage from "../assets/personal.png";
 const About = () => {
return (
<>
 <div  className="main-container bg-gray-100 border py-16">
      <h1 className=" text-center pb-16 text-5xl underline font-bold -">About Me</h1>

     <div className="flex items-center">
{/*image container*/}

<div className="w-full flex justify-center">
<img className="rounded-full shadow-lg w-fit" src={bannerImage} alt="Seema Batra" />
</div>

{/*text container */}
<div className="w-full flex justify-center">
<div className="space-y-5  w-2/3">

    <h1 className="text-5xl font-semibold">
    "Java Developer & Android Developer"
    </h1>
    <p>
    A Java developer specializes in building and maintaining applications using the Java programming language.<br />
    Java developers work with frameworks like Spring and Hibernate and are proficient in object-oriented programming (OOP).<br /> 
    An Android developer is skilled in building mobile applications for devices running the Android operating system.<br />
    They also handle integrating APIs, databases, and third-party libraries, and may use tools like Android Studio.</p>
<button  className="px-4 py-2 bg-orange-500 shadow-lg  rounded-full text-2xl">
Read Me...</button>

</div>
</div>



     </div>

 </div>

</>
);
};
export default About;