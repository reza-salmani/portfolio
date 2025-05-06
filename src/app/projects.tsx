"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectItems } from "./services/project.service";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ props }: Readonly<{ props: { t: any } }>) {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 50%", // when top of card hits 80% viewport height
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.to(container, {
      x: -current * 100 + "%",
      duration: 0.6,
      ease: "power2.inOut",
    });
  }, [current]);

  return (
    <>
      <div className="border-b-2 my-4 pb-2 flex justify-between border-sky-200 dark:border-sky-800">
        <span className="text-sky-500 font-bold text-2xl">
          {props.t["Projects"]}
        </span>
        <button className="text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-400 cursor-pointer">
          <span className="mx-2">{props.t["More"]}</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-2 ">
        {ProjectItems.map((project) => {
          return (
            <div
              key={project.name}
              className=" h-[14rem] m-auto w-[30%] bg-gray-200 dark:bg-gray-950 p-4  rounded-xl shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">
                {props.t[project.title]}
              </h2>

              <div className="flex overflow-hidden">
                <video width="600" height="500" controls>
                  <source src={project.videos[0]} type="video/mp4" />
                </video>
                {/* <img
                className="rounded-lg"
                width={"300px"}
                height={"300px"}
                alt="imageItem"
                src={project.images[0]}
              /> */}
              </div>
              <p
                className={"dark:text-gray-100 text-gray-500 text-xs border-b-2".concat(
                  ` border-${project.color}-400`
                )}
              >
                {props.t[project.footer]}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
