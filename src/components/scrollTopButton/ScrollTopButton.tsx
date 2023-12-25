import { useState } from 'react';
import scrollUp from '../../assets/scroll-up.png'

const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <>
            {visible &&
                <button className="scroll-top-button" onClick={scrollToTop}>
                    <img className="scroll-up" src={scrollUp} />
                </button>
            }
        </>
    );
}

export default ScrollTopButton;