import './About.css'
import TimelineContainer from '../timelineContainer/TimelineContainer';
import timeline from '../timelineContainer/timeline';
const About = () => {
    const timelines: timeline[] = [{
        role: 'Software Engineer',
        company: 'Genesys',
        duration: 'June 2022 - Present',
        description: [
            `Handled the development of Spring boot and Angular for Genesys Multi-Cloud projects and contributed to the release of major milestone projects`,
            `Ensured 100% code coverage through the unit testing in all the projects which prevented defects being identified in testing and actual production environment`,
            `Responsible for providing support for customers by addressing and resolving the defects.`
        ],
        cssStyle: 'container left'
    },
    {
        role: 'Associate Software Engineer',
        company: 'Genesys',
        duration: 'September 2020 - May 2022',
        description: [
            `Developed and implemented new features for Genesys Multi-Cloud that are now used by across the whole business group.`,
            `Refactored and migrated the AngularJs project to Angular framework project`,
            `Automated the local environment setup for the projects and made significant improvements to test the functionalities in the local machine.`
        ],
        cssStyle: 'container right'
    },
    {
        role: 'Software Developer Intern',
        company: 'Genesys',
        duration: 'July 2019 - May 2020',
        description: [
            `Developed high performance microservice for Genesys Cloud by using Spring boot.`,
            `Writing Unit and Integration test cases for the microservice by using JUnit and Mockito.`,
            `Migration of code repositories from Mercurial to GitHub.`,
        ],
        cssStyle: 'container left'
    },
    {
        role: 'Full-Stack Developer Intern (Part Time)',
        company: 'TenSketch',
        duration: 'Jan 2018 - Jan 2019',
        description: [
            `Responsible for developing Dynamic website for customer using HTML, Bootstrap, CSS, JS, PHP and MySQL.`,
            `Source code version control management in GitHub`,
            `Participating in Requirement gathering discussions.`,
        ],
        cssStyle: 'container right'
    }];
    return (
        <>
            <section id="about" className="about">
                <h1>About Me</h1>
                <div className="flex-column">
                    <div className="about-info">

                    </div>
                    <div className="about-info">
                        <h2>Work Experience</h2>
                        {timelines && timelines.map((item) => (
                            <TimelineContainer
                                key={item.role}
                                role={item.role}
                                company={item.company}
                                description={item.description}
                                cssStyle={item.cssStyle}
                                duration={item.duration}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;