export const menus: IMenu[] = [
  {
    id: 0,
    name: "Projects",
    route: "project_Id",
  },
  {
    id: 1,
    name: "Skills",
    route: "skills_Id",
  },
  {
    id: 2,
    name: "Contact",
    route: "contact_Id",
  },
];

interface IMenu {
  name: string;
  route: string;
  id: number;
}
