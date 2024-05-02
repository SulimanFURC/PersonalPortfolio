"use client";
import { TypeAnimation } from "react-type-animation";
import "./styles.css";

const Hero = () => {
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
            </div>
            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/reactIcon.png" alt="React Icon Image" />
                    </div>
                    <img src="./assets/imgs/HD1.png" alt="React Icon Image"/>
                </div>

                <div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/angularIcon.svg" alt="React Icon Image"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/jsIcon.png" alt="React Icon Image"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/webpackIcon.png" alt="React Icon Image"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/mongodbIcon.png" alt="React Icon Image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;