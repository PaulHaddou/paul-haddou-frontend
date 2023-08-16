interface ProjectInfos {
  job: string;
  year: string;
}

interface Project {
  bgColor?: string;
  infos?: ProjectInfos;
  key: string;
  name: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Paul Haddou",
    key: "intro",
    bgColor: "#ecddc0",
  },
  {
    name: "Studio Haddou Dufourc",
    key: "studio-hd",
    bgColor: "#ecddc0",
    infos: {
      job: "Front-end",
      year: "2018",
    },
  },
  {
    name: "Unitlife",
    key: "unitlife",
    bgColor: "#ecddc0",
    infos: {
      job: "Front-end & UX/UI Design",
      year: "2023",
    },
  },
  {
    name: "Givepact",
    key: "givepact",
    bgColor: "#ecddc0",
    infos: {
      job: "Front-end",
      year: "2023",
    },
  },
  {
    name: "My Portfolio",
    key: "paul",
    bgColor: "#ecddc0",
    infos: {
      job: "Front-end & UX/UI Design",
      year: "2023",
    },
  },
  {
    name: "Avicenne Agency",
    key: "avicenne",
    bgColor: "#ecddc0",
    infos: {
      job: "Branding",
      year: "2023",
    },
  },
  {
    name: "Dentsu Creative Amsterdam",
    key: "dentsu",
    bgColor: "#ecddc0",
    infos: {
      job: "Front-end intern",
      year: "2021",
    },
  },
  {
    name: "Synerg'Hétic",
    key: "synerg",
    bgColor: "#ecddc0",
    infos: {
      job: "President",
      year: "2020 - 2021",
    },
  },
];
