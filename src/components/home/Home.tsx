import logo from '../../assets/logo.png'
import './Home.css'

export default function Home() {
    const name: string = 'Thamizharasan Srinivasan';
    const role: string = 'Software Developer';

    return (
        <>
            <section id="home">
                <img src={logo} className="logo" alt={name} />
                <h1 className="title">Hello, I'm <span className="name">{name}</span></h1>
                <h2 className="role">{role}</h2>
            </section>
        </>
    );
}