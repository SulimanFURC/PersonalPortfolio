'use client'
import { useState } from "react";
import SKillCard from "./SkillCard/page";
import "./styles.css";
import { SKILLS } from "@/app/utils/data";
import SkillsInfoCard from "./SkillsInfoCard/page";
const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const handleSelectedSkill = (skill) => {
        setSelectedSkill(skill);
    }
    return(
        <section className="skills-container" id="skills">
            <h5>Technical Proficiency</h5>
            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SKillCard 
                            key={item.title}
                            iconUrl={item.icons}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => handleSelectedSkill(item)}
                        />
                    ))}
                </div>
                <div className="skills-info">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills} 
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills;