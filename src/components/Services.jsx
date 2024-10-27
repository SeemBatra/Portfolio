import React from 'react'
const Services = () => {
    return (
        <>
        <div className="main-container py-14">
            <h1 className="text-5xl font-bold text-center underline">
                My Services
            </h1>
<div className="services-container space-x-5 px-10 flex mt-12">

    <div className="cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
    <i class="text-5xl fa-brands fa-aws"></i>
        <h1 className="text-4xl">Web Development</h1>
        <p>Web development is the process of building and maintaining websites, encompassing everything from simple static pages to complex web applications. It combines programming, design, and problem-solving skills to create user-friendly and efficient online experiences. </p>
        <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">Check</button>
    </div>

    <div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl ">
    <i class="text-5xl fa-solid fa-mobile"></i>
    <h1 className="text-4xl">Android Development</h1>
        <p>Android development involves creating applications for devices that run on the Android operating system, using tools like Java, Kotlin, and Android Studio. Developers build user-friendly, scalable apps by integrating various features suchas database, APIS.</p>
        <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">Check</button>
    </div>

    <div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl">
    <i class="text-5xl fa-solid fa-server"></i>
    <h1 className="text-4xl">Backend Development</h1>
        <p>Backend development focuses on building the server-side of web applications, where data processing, business logic, and database management occur.It involves creating APIs, handling requests from the frontend, managing databases, and ensuring that servers run efficiently. </p>
        <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">Check</button>
    </div>

</div>
        </div>
        
        
        </>
    );
};
export default Services;