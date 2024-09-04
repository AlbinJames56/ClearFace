import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LoadingPage.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function LoadingPage() {
   useGSAP(()=>{

   
      gsap.timeline().from(".loadingText span", {
        y: 200,
        stagger: 0.1,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "back(4)",
      })
      .from(".loadingBun", { opacity: 0, duration: 0.1 })
      .from(".loadingBun", { rotate: -360, duration: 2, ease: "power1.in" })
      .to(".loadingBundle", {
        rotate: 360,
        repeat: 1,
        duration: 4,
        ease: "none",
      })
      .to(
        ".loadingText span",
        {
          y: 200,
          stagger: 0.1,
          opacity: 0,
          delay: 0.5,
          duration: 0.5,
          ease: "back.in(4)",
        },
        "<"
      )
      .to(
        ".loadingbundleCover",
        { x: "-7.969vw", duration: 4, ease: "power1.inOut" },
        5
      )
      .to(".centerCircle", { scale: 3000, duration: 3, ease: "back.in(1)" }, 8)
      .to(".loadingCircle1", { scale: 12, y: -200, duration: 6, ease: "none" }, 4)
      .to(".loadingCircle2", { scale: 11, y: -200, duration: 6, ease: "none" }, 4.2)
      .to(".loadingCircle3", { scale: 10, y: -200, duration: 6, ease: "none" }, 4.4)
      .to(".loadingCircle4", { scale: 9, y: -200, duration: 6, ease: "none" }, 4.6)
      .to(".loadingCircle5", { scale: 8, y: -200, duration: 6, ease: "none" }, 4.8)
      .to(".loadingCircle6", { scale: 7, y: -200, duration: 6, ease: "none" }, 5)
      .to(".landingPage", { opacity: 0, duration: 0.001 }, 10.8)
      .set(".landingPage", { display: "none" })
      .set(".content", { display: "block" });
  
})
  return (
    <div className="landingPage flex justify-center items-center w-full h-screen">
  <p className="loadingText mx-3 m-0 flex space-x-1">
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
  </p>
  <div className="loadingbundleCover">
    <div className="loadingBundle flex justify-center items-center relative">
      <div className="loadingBun1 loadingBun absolute">
        <div className="loadingCircle loadingCircle1 w-6 h-6 rounded-full bg-blue-500"></div>
      </div>
      <div className="loadingBun2 loadingBun absolute">
        <div className="loadingCircle loadingCircle2 w-6 h-6 rounded-full bg-blue-500"></div>
      </div>
      <div className="loadingBun3 loadingBun absolute">
        <div className="loadingCircle loadingCircle3 w-6 h-6 rounded-full bg-blue-500"></div>
      </div>
      <div className="loadingBun4 loadingBun absolute">
        <div className="loadingCircle loadingCircle4 w-6 h-6 rounded-full bg-blue-500"></div>
      </div>
      <div className="loadingBun5 loadingBun absolute">
        <div className="loadingCircle loadingCircle5 w-6 h-6 rounded-full bg-blue-500"></div>
      </div>
      <div className="loadingBun6 loadingBun absolute">
        <div className="loadingCircle loadingCircle6 w-6 h-6 rounded-full bg-blue-500"></div>
      </div>
      <div className="centerCircle w-8 h-8 rounded-full bg-blue-700"></div>
    </div>
  </div>
</div>

  );
}

export default LoadingPage;
