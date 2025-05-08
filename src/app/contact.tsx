import { MailIcon, Phone } from "lucide-react";
export const Contact = ({ props }: Readonly<{ props: { t: any } }>) => {
  const showMailingFormModal = () => {};
  return (
    <>
      <div className="border-b-2 pb-2 flex justify-center border-sky-200 dark:border-sky-800">
        <span className="text-sky-500 font-bold text-2xl">
          {props.t["Contact"]}
        </span>
      </div>
      <div className="flex justify-center mt-4">
        <a href="mailto:r.salmani.programming@gmail.com" target="_blank">
          <MailIcon
            onClick={showMailingFormModal}
            className="mx-2 my-auto cursor-pointer hover:scale-150 transition-all duration-300"
          ></MailIcon>
        </a>
        <a href="tell:+98-935-643-6243" title="+98-935-643-6243">
          <Phone
            onClick={showMailingFormModal}
            className="mx-2 my-auto cursor-pointer hover:scale-150 transition-all duration-300"
          ></Phone>
        </a>
        <a
          href="https://www.linkedin.com/in/reza-salmani-03284b230"
          target="_blank"
        >
          <img
            alt="linkedin"
            className="mx-2 my-auto cursor-pointer hover:scale-150 transition-all duration-300"
            width={"30px"}
            height={"30px"}
            src={"/linkedin.svg"}
          />
        </a>
      </div>
    </>
  );
};
