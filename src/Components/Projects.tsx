import { ProjectInfo } from "../user";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="px-16 my-10 md-mx:px-6 font-mono " id="Projects">
            <h1 className="sm-mx:text-3xl xs-mx:text-2xl text-center mb-5 mt-5 font-mono text-4xl font-bold text-white">
                <span className=" text-primaryColor">02.&nbsp;</span>
                Projects
            </h1>

            <div className="flex flex-wrap justify-around md-mx:justify-between gap-3 sm-mx:justify-center md-mx:gap-2">
                {
                    ProjectInfo.map((project:any, index:number) => <ProjectCard key={index} title={project.title} desc={project.desc} image={project.image} github_link={project.github_link} technologies={project.technologies} />
                    )
                }
            </div>

        </div>
    )
}
export default Projects;