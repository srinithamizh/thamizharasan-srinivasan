import AboutCss from './About.module.css'
const About = () => {
    return (
        <>
            <section id="about" className={AboutCss.about}>
                <h2>About Me</h2>
                <div className={AboutCss.card}>

                </div>
            </section>
        </>
    );
}

export default About;