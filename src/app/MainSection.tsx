"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { getDirection } from "./services/language.service";
export default function MainSection({
  props,
}: Readonly<{ props: { t: any } }>) {
  const bgRef = useRef(null);
  const [isRtl, setIsRtl] = useState(false);
  useEffect(() => {
    setIsRtl("rtl" === getDirection());
  }, []);
  const handleMouseEnter = () => {
    gsap.to(bgRef.current, {
      width: "100%",
      duration: 0.2,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bgRef.current, {
      width: "0%",
      duration: 0.2,
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
        <h1 className="text-5xl font-bold">{props.t["WelcomeMessage"]}</h1>
      </div>
      <div className="w-[70%] m-auto flex justify-center text-sky-700 mt-20">
        <h2 className="text-3xl font-bold">{props.t["JobField"]}</h2>
      </div>
      <div className="w-[45%] m-auto flex justify-center text-sky-900 dark:text-sky-100 mt-20">
        <p className=" text-center">{props.t["description_1"]}</p>
      </div>
      <div className="w-[45%] m-auto flex justify-center text-sky-900 dark:text-sky-100">
        <p className=" text-center">{props.t["description_2"]}</p>
      </div>
      <div className="w-[45%] m-auto flex justify-center text-sky-100 mt-20">
        <a
          href="/files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
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

          <span style={{ position: "relative", zIndex: 1 }}>
            {props.t["resume"]}
          </span>
        </a>
        <a
          className="mx-2 my-auto cursor-pointer"
          target="_blank"
          href="https://github.com/reza-salmani"
        >
          <img
            alt="github"
            onMouseEnter={handleMouseEnterIcon}
            onMouseLeave={handleMouseLeaveIcon}
            className="icon "
            width={"30px"}
            height={"30px"}
            src={"/github.svg"}
          />
        </a>
        <a
          className="mx-2 my-auto cursor-pointer"
          href="https://www.linkedin.com/in/reza-salmani-03284b230"
          target="_blank"
        >
          <img
            alt="linkedin"
            onMouseEnter={handleMouseEnterIcon}
            onMouseLeave={handleMouseLeaveIcon}
            className="icon"
            width={"30px"}
            height={"30px"}
            src={"/linkedin.svg"}
          />
        </a>
      </div>
    </div>
  );
}
