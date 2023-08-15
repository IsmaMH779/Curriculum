import aboutImg from "../../assets/img/Home-profile-img.png"

const About = () => {
    var data = require("../../assets/json/information.json")

    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={aboutImg} alt="" />
            </div>

            <div className="about-content">
                <h2 className="heading">Acerca <span>de mi</span></h2>
                <h3>Web developer + Data Cientist + IA with Python</h3>
                <p>{data.about.info}</p>
                <a href="#" className="btn">Leer Mas</a>

            </div>
        </section>
    )
}

export default About;