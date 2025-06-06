export const ProjectItems: IProject[] = [
  {
    name: "Portfolio",
    footer: "withNextjsGsap",
    video: "",
    image: "/files/portfolio.png",
    isPrivate: false,
    link: "https://github.com/reza-salmani/portfolio",
  },
  {
    name: "SingleLanguageERP",
    footer: "withRestfullOidcTailwind",
    video: "/files/single_language_angular_video.mp4",
    image: "",
    isPrivate: true,
    link: "https://github.com/reza-salmani/frontend_single_language",
  },
  {
    name: "MultiLanguageERP",
    footer: "withRestfullOidcTailwind",
    video: "/files/multi_language_angular_video.mp4",
    image: "",
    isPrivate: true,
    link: "https://github.com/reza-salmani/ArisERP",
  },
  {
    name: "HROrganization",
    footer: "withRestfullJWTTailwind",
    video: "/files/vue_organization.mp4",
    image: "",
    isPrivate: true,
    link: "https://github.com/reza-salmani/organization",
  },
];
interface IProject {
  name: string;
  video?: string;
  footer: string;
  link: string;
  image?: string;
  isPrivate: boolean;
}
