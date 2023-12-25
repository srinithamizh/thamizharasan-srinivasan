import './SocialMedia.css'

interface SocialMedia {
    logo: string,
    link: string
}

const SocialMedia = ({ logo, link }: SocialMedia) => {
    return (
        <>
            <a className="icon" href={link} target="_blank">
                <img className="social-media-icon" src={logo} />
            </a>
        </>
    );
}

export default SocialMedia;