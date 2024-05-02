'use client'
import { PROJECTS } from "@/app/utils/data";
import ProjectInfoCard from "./ProjectCard/page";
import "./styles.css";

const Projects = () => {

    return(
        <section className="projects-container" id="projects">
            <h5>Projects</h5>
            <div className="projects-content">
                <div className="projects">
                    {PROJECTS.map((item) => (
                        <ProjectInfoCard 
                            key={item.title}
                            heading={item.title}
                            desc={item.projectDesc}
                            tech={item.technologies}
                            link={item.projectlink}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;