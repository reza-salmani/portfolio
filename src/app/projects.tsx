"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectItems } from "./services/project.service";
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Projects({ props }: Readonly<{ props: { t: any } }>) {
  const [isHovered, setIsHovered] = useState<boolean[]>([false]);
  useEffect(() => {
    ProjectItems.forEach((p, index) => {
      setIsHovered((prevArray) => {
        const newArray = [...prevArray];
        newArray[index] = false;
        return newArray;
      });
    });
  }, []);
  const handleMouseEnter = (index: number) => {
    setIsHovered((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = true;
      return newArray;
    });
  };
  const handleMouseLeave = (index: number) => {
    setIsHovered((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };
  return (
    <>
      <div className="border-b-2 my-4 pb-2 flex justify-between border-sky-200 dark:border-sky-800">
        <span className="text-sky-500 font-bold text-2xl">
          {props.t["Projects"]}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 ">
        {ProjectItems.map((project, index) => {
          return (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={project.name}
              className=" h-[14rem] my-auto relative w-[30%] bg-gray-200 dark:bg-gray-950 p-4  rounded-xl shadow-md"
            >
              <h2 className="text-lg min-w-max font-bold mb-2">
                {props.t[project.name]}
              </h2>
              <div
                className={
                  "flex overflow-hidden w-full  h-[calc(100%-2rem)] rounded-lg transition-all duration-300"
                }
              >
                {project.video ? (
                  <video controls>
                    <track
                      src="captions.vtt"
                      kind="captions"
                      srcLang="en"
                      label="English"
                    ></track>
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <img alt="imageP" src={project.image} />
                )}
              </div>
              <p
                className={" -translate-y-[200%] top-[30%] w-full rounded-lg bg-blue-950 transition-all duration-300 text-gray-100  text-center text-sm p-2 border-b-2".concat(
                  !isHovered[index]
                    ? " hidden opacity-0"
                    : " visible opacity-100"
                )}
              >
                <span>{props.t[project.footer]}</span>
                {project.isPrivate ? (
                  <span className="block text-xs text-center text-red-400">
                    {props.t["PrivateProject"]}
                  </span>
                ) : (
                  <a
                    className="text-center flex"
                    href={project.link}
                    target="blank"
                  >
                    <img
                      alt="github"
                      className="icon m-auto cursor-pointer"
                      width={"30px"}
                      height={"30px"}
                      title={project.link}
                      src={"/github.svg"}
                    />
                  </a>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
