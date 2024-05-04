import Link from "next/link";
import "./styles.css";

const ContactInfoCard = ({iconUrl, link}) => {
    const isReactIcon = iconUrl && typeof iconUrl === 'object' && iconUrl.type;

    return(
        <div className="contact-details-card">
            <Link href={link} target="_blank" className="contact-item">
                <div className="icon">{iconUrl}</div>
            </Link>
        </div>
    )
}

export default ContactInfoCard;