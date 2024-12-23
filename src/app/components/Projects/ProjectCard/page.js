'use client';
import Link from "next/link";
import "./styles.css";

const ProjectInfoCard = ({heading, desc, tech = [], link}) => {
    return(
        <div className="projects-info-card">
            <h6>
                <Link href={link} target="_blank"> {heading} </Link>
            </h6>
            <div className="projects-info-content">
                <p>{desc}</p>
                <div className="project-tech-stacks">
                    {tech.length > 0 ? (
                        tech.map((item, index) => (
                            <div key={`techStacks_${index}`}>
                                <div dangerouslySetInnerHTML={{ __html: item.techStack }}></div>
                            </div>
                        ))
                    ) : (
                        <p>No tech stack available</p> // Optional: Message when no tech stacks
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectInfoCard;