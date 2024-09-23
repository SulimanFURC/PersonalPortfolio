'use client';
import Image from "next/image";
import "./styles.css";

const SKillCard = ({title, iconUrl, isActive, onClick}) => {
    return(
        <div className={`skills-card ${isActive ? "active" : ""}`} onClick={() => onClick()}>
            <div className="skill-icon">
                <Image height={100} width={100} src={iconUrl} alt={title}></Image>
            </div>
            <span>{title}</span>
        </div>
    )
}

export default SKillCard;