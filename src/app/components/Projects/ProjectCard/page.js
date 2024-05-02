import Link from "next/link";
import "./styles.css";

const ProjectInfoCard = ({heading, desc, tech, link}) => {
    return(
        <div className="skills-info-card">
            <h6>
                <Link href={link} target="_blank"> {heading} </Link>
            </h6>
            <div className="skills-info-content">
                <p>{desc}</p>
                <div className="project-tech-stacks">
                    {tech.map((item, index) => (
                        <div key={`techStacks_${index}`}>
                            <div dangerouslySetInnerHTML={{__html: item.techStack}}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectInfoCard;