import React from "react";
import facedetection from "../assets/facedetection.gif";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <div className="flex justify-center items-center m-10">
        <h1 className="text-5xl text-fuchsia font-bold text-center p-5">
          The Easiest Image Recognizor from Low Quality Videos
        </h1>
        <div className="p-5 m-5 ">
          <img className="rounded-xl" src={facedetection} alt="" />
        </div>
      </div>
      <div className=" flex justify-center mb-10">
        <Link to={'/home'}  style={{ textDecoration: "none" }}>
        <button className="bg-navy_blue text-white py-2 px-4 rounded-lg shadow hover:bg-navy_blue-dark">
          Start For Free
        </button></Link>
      </div>
      <div className="container flex justify-center ">
        <p className=" text-center  w-3/4 bg-gray-200 p-5 rounded-2xl font-semibold">In the realm of security surveillance, low-quality video footage often poses significant challenges in identifying individuals and gathering forensic evidence. Our advanced system, powered by SRGAN technology, is designed to tackle this issue head-on. Through meticulous processing, our app enhances poor-quality video, making it possible to accurately detect and recognize faces, even in challenging conditions. Whether for law enforcement, security professionals, or private users, our solution ensures that critical details are preserved, enabling effective identification and improving the reliability of surveillance footage.</p>
      </div>
    </>
  );
}

export default LandingPage;
