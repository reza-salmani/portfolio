export const ProjectItems: IProject[] = [
  {
    name: "MultiLanguageAngularProject",
    title: "ArisCorp",
    color: "yellow",
    footer: "withRestfullOidcTailwind",
    images: [],
    videos: ["/files/single_language_angular_video.mp4"],
  },
  {
    name: "MultiLanguageAngularProject_1",
    title: "ArisCorp",
    color: "yellow",
    footer: "withRestfullOidcTailwind",
    images: [],
    videos: ["/files/multi_language_angular_video.mp4"],
  },
  {
    name: "MultiLanguageAngularProject_2",
    title: "ArisCorp",
    color: "yellow",
    footer: "withRestfullOidcTailwind",
    images: [],
    videos: ["/files/multi_language_angular_video.mp4"],
  },
];
interface IProject {
  name: string;
  images: string[];
  videos: string[];
  title: string;
  footer: string;
  color: string;
}
