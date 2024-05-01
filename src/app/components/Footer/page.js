import "./styles.css";

const Footer = () => {
    const getCurrentYear = () => {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }
    return(
        <div className="footer">
            Made with ❤️ by Suliman Munawar Khan
        </div>
    )
}

export default Footer;