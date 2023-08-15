import { useEffect } from "react";
import HomePic from "../../assets/img/Home-profile-img.png"
import Typed from "typed.js";
const Home = () => {

    useEffect(() => {
        const typed = new Typed('.multiple-text', {
            strings: ["Web Dev", "Data Cientist", "IA With Python"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 500,
            loop: true
        });

        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Me llamo</h3>
                <h1>Ismael Mehdi</h1>
                <h3>
                    <span className="multiple-text"></span>
                </h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore eligendi pariatur similique dolor, consequatur eum nemo.</p>
                <div className="social-media">
                    <a href="#"><i class='bx bxl-linkedin-square'></i></a>
                    <a href="#"><i class='bx bxl-github' ></i></a>
                </div>
                <a href="#" className="btn">Descargar CV</a>
            </ div>
            <div className="home-img">
                <img src={HomePic} alt="" />
            </div>
        </section>
    )
}

export default Home;