import './Footer.css'
import emailLogo from '../../assets/email.png'
import linkedInLogo from '../../assets/linkedin.png'
import gitHubLogo from '../../assets/github.png'
import instaLogo from '../../assets/instagram.png'
import SocialMedia from '../socialMedia/SocialMedia'
const Footer = () => {
    const socialMediaLink = [
        {
            name: 'email',
            logo: emailLogo,
            link: 'mailto:srinithamizharasan@gmail.com'
        },
        {
            name: 'linkedin',
            logo: linkedInLogo,
            link: 'https://linkedin.com/in/srinithamizh'
        },
        {
            name: 'github',
            logo: gitHubLogo,
            link: 'https://github.com/srinithamizh'
        }, {
            name: 'instagram',
            logo: instaLogo,
            link: 'https://www.instagram.com/thamizharasan_srinivasan'
        }
    ];
    const year: number = new Date().getFullYear();

    return (
        <div className="footer">
            <h2>Contact</h2>
            <div className="social-media-link flex row">
                {socialMediaLink.map((socialMedia) =>
                (
                    <SocialMedia
                        key={socialMedia.name}
                        link={socialMedia.link}
                        logo={socialMedia.logo}
                    />
                )
                )}
            </div>
            <hr />
            <p>
                <span className='copyrights'>&copy; {year} </span>
                Thamizharasan Srinivasan
            </p>
        </div>
    );
}

export default Footer;