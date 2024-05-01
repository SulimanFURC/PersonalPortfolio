import "./styles.css";

const ExperienceCard = ({details}) => {
    return(
       <div className="work-experience-card">
            <h6>{details.title}</h6>
            <h5>{details.company}</h5>
            <div className="work-duration">{details.date}</div>
            <ul>
                {details.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
       </div>
    )
}

export default ExperienceCard;