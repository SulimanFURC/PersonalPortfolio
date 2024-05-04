'use client'
import { PROJECTS, PROJECT_DESC } from "@/app/utils/data";
import ProjectInfoCard from "./ProjectCard/page";
import "./styles.css";
import Link from "next/link";

const Projects = () => {
    return(
        <section className="projects-container" id="projects">
            <h5>Projects</h5>
            <div className="project-description">
                <div className="projectImg">
                    <img src="./assets/imgs/project.png" alt="project img " />
                </div>
                <div className="project-text">
                    <p>{PROJECT_DESC.desc}</p>
                </div>
            </div>
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
            <div className="projects-more">
                <Link href={"https://github.com/SulimanFURC"} target="_blank">
                    <button>More Projects (GitHub)</button>
                </Link>
            </div>
        </section>
    )
}

export default Projects;