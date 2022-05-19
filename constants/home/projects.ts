interface Project {
  name: string;
  subtitle: string;
  thumbnail: string;
  isImg: boolean;
  video: string;
  key: string;
  liveWebsite: string;
}
export const PROJECTS : Project[] = [
  {
    name: "Liminal",
    subtitle: "Dev Front-end",
    thumbnail: "liminal.jpg",
    video: "",
    key: "liminal",
    liveWebsite: "",
    isImg: true
  },
  {
    name: "Studio Haddou / Dufourcq",
    subtitle: "Webmaster - Dev Front-end",
    thumbnail: "Studio-HD.jpg",
    video: "",
    key: "studio-haddou-dufourcq",
    liveWebsite: "www.haddou-dufourcq.com",
    isImg: true
  },
  {
    name: "Motion animation de logo",
    subtitle: "Motion designer",
    thumbnail: "",
    video: "Motion-Animation-de-logo.mp4",
    key: "motion-animation-de-logo",
    liveWebsite: "",
    isImg: false
  },
  {
    name: "My Pills",
    subtitle: "UX / UI Designer",
    thumbnail: "My-pills.jpg",
    video: "",
    key: "my-pills",
    liveWebsite: "",
    isImg: true
  },
  {
    name: "Affiches de campagnes Synerg'hetic",
    subtitle: "Graphiste",
    thumbnail: "Affiches-Synerg.jpg",
    video: "",
    key: "affiches-synerg",
    liveWebsite: "",
    isImg: true
  },
]
