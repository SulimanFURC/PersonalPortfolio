import "./styles.css";

const ContactInfoCard = ({iconUrl, text}) => {
    const isReactIcon = iconUrl && typeof iconUrl === 'object' && iconUrl.type;

    return(
        <div className="contact-details-card">
            {isReactIcon ? (
                <div className="icon">{iconUrl}</div>
            ) : (
                <div className="icon">
                    <a href="">
                        <img src={iconUrl} alt="icon" />
                    </a>
                </div>
            )}
            <p>{text}</p>
        </div>
    )
}

export default ContactInfoCard;