interface Project {
  name: string;
  key: string;
  tasks: string[];
  date: string;
  linkWebsite: string;
  blocImage: string[];
  blocVideo: string[];
  nextProjectKey: string;
}
export const PROJECTS : Project[] = [
  {
    name: "Trichrome",
    key: "trichrome",
    tasks: ["Front-End","- Vue.JS"],
    date: "2022",
    linkWebsite: "https://www.trichrome.fr",
    blocImage: ["image-1.jpg"],
    blocVideo: ["video-1.mp4"],
    nextProjectKey: "foodlab"
  },
  {
    name: "Foodlab",
    key: "foodlab",
    tasks: ["Front","- Back"],
    date: "2022",
    linkWebsite: "#",
    blocImage: ["image-1.jpg"],
    blocVideo: ["image-1.mp4"],
    nextProjectKey: "trichrome"
  }
]
