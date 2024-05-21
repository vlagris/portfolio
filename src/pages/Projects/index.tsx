import ProjectsList from "@components/ProjectsList";
import {projectsData} from "@/data.ts";


function Projects() {
  return (
    <div className="min-h-full py-16 sm:py-24 dark:bg-gray-900">
      <div className="container">

        <ProjectsList projects={projectsData}/>

      </div>
    </div>
  );
}

export default Projects;