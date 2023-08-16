import { useState, createContext, useContext, PropsWithChildren } from "react";

export interface UpdateCurrentProjectArgs {
  projectIndex: number;
}

export type ProjectsNavContextProps = {
  currentProjectIndex: number;
  updateCurrentProject: (args: UpdateCurrentProjectArgs) => void;
};

const ProjectsNavContext = createContext<ProjectsNavContextProps | undefined>(undefined);

export const ProjectsNavProvider = ({ children }: PropsWithChildren) => {
  const [currentProjectIndex, setCurrentProject] = useState(0);

  const updateCurrentProject = (args: UpdateCurrentProjectArgs) => {
    const { projectIndex } = args;
    setCurrentProject(projectIndex);
  };

  return (
    <ProjectsNavContext.Provider
      value={{
        currentProjectIndex,
        updateCurrentProject,
      }}
    >
      {children}
    </ProjectsNavContext.Provider>
  );
};

export const useProjectsNav = () => {
  const context = useContext(ProjectsNavContext);
  if (context === undefined) {
    throw new Error("useProjectsNav must be used within a UserProvider");
  }
  return context;
};
