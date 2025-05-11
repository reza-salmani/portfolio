import { ProjectItems } from "../services/project.service";

export default function Projects({ props }: Readonly<{ props: { t: any } }>) {
  return (
    <>
      <div className="border-b-2 my-4 pb-2 flex justify-between border-sky-800">
        <span className="text-sky-500 font-bold text-2xl">
          {props.t["Projects"]}
        </span>
      </div>
      <div className="flex flex-wrap justify-start  gap-4 ">
        {ProjectItems.map((project, index) => {
          return (
            <div
              key={project.name}
              className="group h-[20rem] m-auto relative w-[20rem] bg-gray-200 dark:bg-gray-950 p-4  rounded-xl shadow-md"
            >
              <h2 className="text-lg min-w-max font-bold mb-2">
                {props.t[project.name]}
              </h2>
              <div className={"flex w-full h-[calc(100%-6rem)] rounded-lg"}>
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
                className={
                  "w-full rounded-lg text-gray-800 dark:text-gray-200 mt-2 text-center text-sm"
                }
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
