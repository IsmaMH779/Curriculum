import { useEffect } from "react";
import HomePic from "../../assets/img/Home-profile-img.png"
import Typed from "typed.js";
import { inf } from "../../assets/json/information.json"
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

    var data = require("../../assets/json/information.json")

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hola, soy</h3>
                <h1>{data.home.name}</h1>
                <h3>
                    <span className="multiple-text"></span>
                </h3>
                <p>{data.home.info}</p>
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