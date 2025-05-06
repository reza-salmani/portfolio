"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { getDirection } from "./language";
export default function MainSection({ t }: Readonly<{ t: any }>) {
  const isRtl = "rtl" === getDirection();
  const bgRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(bgRef.current, {
      width: "100%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bgRef.current, {
      width: "0%",
      duration: 0.5,
      ease: "power2.in",
    });
  };
  const handleMouseEnterIcon = (event: any) => {
    gsap.fromTo(event.target, { scale: 1 }, { scale: 1.5, duration: 0.3 });
  };

  const handleMouseLeaveIcon = (event: any) => {
    gsap.fromTo(event.target, { scale: 1.5 }, { scale: 1, duration: 0.3 });
  };

  return (
    <div>
      <div className="w-[70%] m-auto flex justify-center text-sky-500 mt-10">
        <h1 className="text-5xl font-bold">{t.WelcomeMessage}</h1>
      </div>
      <div className="w-[70%] m-auto flex justify-center text-sky-700 mt-20">
        <h2 className="text-3xl font-bold">{t.JobField}</h2>
      </div>
      <div className="w-[45%] m-auto flex justify-center text-sky-900 dark:text-sky-100 mt-20">
        <p className=" text-center">{t.description}</p>
      </div>
      <div className="w-[45%] m-auto flex justify-center text-sky-100 mt-20">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mr-4 rtl:ml-4"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "12px 24px",
            fontSize: "16px",
            color: "#fff",
            background: "#222",
            border: "none",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          <div
            ref={bgRef}
            className={"absolute top-0 h-full z-0 transition-[width] bg-sky-700 duration-500".concat(
              isRtl ? " right-0" : " left-0"
            )}
          ></div>
          <span style={{ position: "relative", zIndex: 1 }}>{t.resume}</span>
        </button>
        <img
          alt="github"
          onMouseEnter={handleMouseEnterIcon}
          onMouseLeave={handleMouseLeaveIcon}
          className="icon mx-2 my-auto cursor-pointer"
          width={"30px"}
          height={"30px"}
          src={"/github.svg"}
        />
        <img
          alt="gmail"
          onMouseEnter={handleMouseEnterIcon}
          onMouseLeave={handleMouseLeaveIcon}
          className="icon mx-2 my-auto cursor-pointer"
          width={"30px"}
          height={"30px"}
          src={"/gmail.svg"}
        />
        <img
          alt="linkedin"
          onMouseEnter={handleMouseEnterIcon}
          onMouseLeave={handleMouseLeaveIcon}
          className="icon mx-2 my-auto cursor-pointer"
          width={"30px"}
          height={"30px"}
          src={"/linkedin.svg"}
        />
      </div>
    </div>
  );
}
