import "./styles.css";

const Hero = () => {
    return(
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experience That Inspire</h2>
                <p>Passionate Frontend Developer | Transforming Ideas into Reality</p>
            </div>
            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/reactIcon.png" />
                    </div>
                    <img src="./assets/imgs/HD1.png"/>
                </div>

                <div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/angularIcon.svg"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/jsIcon.png"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/webpackIcon.png"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/imgs/mongodbIcon.png"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;