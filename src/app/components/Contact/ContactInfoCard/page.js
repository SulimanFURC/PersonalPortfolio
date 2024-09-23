import Link from "next/link";
import "./styles.css";
import Image from "next/image";

const ContactInfoCard = ({ iconUrl = null, link = "#" }) => {
    // Check if iconUrl is a valid React element or a string URL
    const isReactIcon = iconUrl && typeof iconUrl === 'object' && iconUrl.type;

    return (
        <div className="contact-details-card">
            <Link href={link || "#"} target="_blank" className="contact-item">
                <div className="icon">
                    {/* Render the icon or a fallback */}
                    {isReactIcon ? iconUrl : <Image width={100} height={100} src={iconUrl} alt="contact icon" />}
                </div>
            </Link>
        </div>
    );
};

export default ContactInfoCard;
