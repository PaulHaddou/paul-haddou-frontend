interface Project {
  name: string;
  subtitle: string;
  image: string;
  video: string;
  altImage: string;
  translationKey: string;
  internalLink: string;
  liveWebsite: string;
  isImg: boolean;
}
export const PROJECTS : Project[] = [
  {
    name: "Trichrome",
    subtitle: "Front-end",
    image: "trichrome/home-thumbnails.jpg",
    video: "trichrome/home-thumbnails.jpg",
    altImage: "",
    translationKey: "trichrome",
    internalLink: "trichrome",
    liveWebsite: "/projects/use-case/trichrome",
    isImg: true
  },
  {
    name: "FoodLab",
    subtitle: "Platform",
    image: "foodlab/home-thumbnails.jpg",
    video: "foodlab/home-thumbnails.jpg",
    altImage: "",
    translationKey: "foodlab",
    internalLink: "foodlab",
    liveWebsite: "/projects/use-case/foodlab",
    isImg: true
  }
]
