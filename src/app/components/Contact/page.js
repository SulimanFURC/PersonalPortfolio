import { CONTACT_DETAILS } from "@/app/utils/data";
import ContactInfoCard from "./ContactInfoCard/page";
import "./styles.css";
import ContactForm from "./ContactForm/page";

const ContactMe = () => {
    return(
        <section className="contact-container" id="contact">
            <h5>Contact Me</h5>
            <div className="contact-content">
                <div className="contact-info">
                    {CONTACT_DETAILS.map((item, index) => (
                        <ContactInfoCard 
                            iconUrl={item.iconUrl}
                            link={item.link}
                            key={index}
                        />
                    ))}
                </div>
                <div style={{flex: 1}}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe;