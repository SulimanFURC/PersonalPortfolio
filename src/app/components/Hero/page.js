"use client";
import { TypeAnimation } from "react-type-animation";
import "./styles.css";
import Image from "next/image";

const Hero = () => {

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = "./assets/SulimanResume.pdf";
        link.download = 'Suliman-Munawar-Resume.pdf'; // Set the filename for the downloaded file
        link.target = '_blank'; // Open the link in a new tab (optional)
        link.click();
      };
    return(
        <section className="hero-container" id="hero">
            <div className="hero-content">
                <h2>Hello, I&apos;m{" "}</h2>
                <h2>
                    <TypeAnimation 
                        sequence={[
                            "Suliman Munawar",
                            1000,
                            "Angular Developer",
                            1000,
                            "React Developer",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
                <p>Frontend Developer | UI/UX | Angular | React | NextJs</p>
                <button className="btn-cv" onClick={downloadCV}>Download My CV</button>
            </div>
            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <Image src="/assets/imgs/reactIcon.png" width={100} height={100} alt="React Icon Image" />
                    </div>
                    <Image src="/assets/imgs/HD1.png" width={100} height={100} alt="React Icon Image"/>
                </div>

                <div>
                    <div className="tech-icon">
                        <Image src="/assets/imgs/angularIcon.svg" width={100} height={100} alt="React Icon Image"/>
                    </div>
                    <div className="tech-icon">
                        <Image src="/assets/imgs/jsIcon.png" width={100} height={100} alt="React Icon Image"/>
                    </div>
                    <div className="tech-icon">
                        <Image src="/assets/imgs/webpackIcon.png" width={100} height={100} alt="React Icon Image"/>
                    </div>
                    <div className="tech-icon">
                        <Image src="/assets/imgs/mongodbIcon.png" width={100} height={100} alt="React Icon Image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;