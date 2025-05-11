"use client";
import { SkillItems } from "../services/skills.service";

export default function Skills({ props }: Readonly<{ props: { t: any } }>) {
  return (
    <>
      <div className="border-b-2 my-4 pb-2 flex justify-between border-sky-800">
        <span className="text-sky-500 font-bold text-2xl">
          {props.t["Skills"]}
        </span>
      </div>
      {SkillItems.BackEnd.length ? (
        <>
          <div className="ml-2 my-2 rtl:mr-2 dark:text-sky-200 text-sky-900 text-lg">
            {props.t["BackEnd"]} :
          </div>
          <div className="flex ml-4 rtl:mr-4 justify-start  flex-wrap">
            {SkillItems.BackEnd.map((be) => (
              <div
                className="bg-gray-200 dark:bg-gray-950 m-2 hover:scale-110 transition-all duration-300 font-light rounded-lg p-2 text-amber-900 dark:text-amber-300"
                key={be}
              >
                {be}
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
      <div className="ml-2 my-2 rtl:mr-2 dark:text-sky-200 text-sky-900 text-lg">
        {props.t["FrontEnd"]} :
      </div>
      <div className="flex ml-4 rtl:mr-4 justify-start  flex-wrap">
        {SkillItems.FrontEnd.map((fe) => (
          <div
            className="bg-gray-200 dark:bg-gray-950 m-2 hover:scale-110 transition-all duration-300 cursor-pointer font-light rounded-lg p-2 dark:text-amber-300 text-amber-900"
            key={fe}
          >
            {fe}
          </div>
        ))}
      </div>
      <div className="ml-2 my-2 rtl:mr-2 dark:text-sky-200 text-sky-900 text-lg">
        {props.t["Talents"]} :
      </div>
      <div className="flex ml-4 rtl:mr-4 justify-start  flex-wrap">
        {SkillItems.Talents.map((fe) => (
          <div
            className="bg-gray-200 dark:bg-gray-950 m-2 hover:scale-110 transition-all duration-300 cursor-pointer  font-light rounded-lg p-2 text-amber-900 dark:text-amber-300"
            key={fe}
          >
            {fe}
          </div>
        ))}
      </div>
    </>
  );
}
