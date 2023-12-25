import logo from '../../assets/logo.png'
import './Home.css'

export default function Home() {
    const name: string = 'Thamizharasan Srinivasan';
    const role: string = 'Software Developer';
    const experience: number = calculateExperience();
    const description: string = `I'm a ${role} with over ${experience} years of professional experience in Java, Spring Boot and Angular. 
    Active Team player and proven ability to approach problems effectively, prioritize and complete multiple tasks.`;

    function calculateExperience(): number {
        const currentDate = new Date();
    const DOJ = new Date(2020, 8);
    let differeceInYears: number = currentDate.getFullYear() - DOJ.getFullYear();
    if (
        currentDate.getMonth() < DOJ.getMonth() ||
        (currentDate.getMonth() === DOJ.getMonth() &&
            currentDate.getDate() < DOJ.getDate())
    ) {
        differeceInYears--;
    }
    return differeceInYears;
    }

    return (
        <>
            <section id="home">
                <img src={logo} className="logo" alt={name} />
                <h1 className="title">Hello, I'm <span className="name">{name}</span></h1>
                <h4 className="role">{description}</h4>
                <button className="button scrollButton">Scroll for more</button>
            </section>
        </>
    );
}