import aboutImg from "../../assets/img/Home-profile-img.png"

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={aboutImg} alt="" />
            </div>

            <div className="about-content">
                <h2 className="heading">Acerca <span>de mi</span></h2>
                <h3>Web developer + Data Cientist + IA with Python</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae cum maiores neque totam ipsa facere, veniam modi quaerat quos voluptatibus veritatis consectetur quisquam deleniti repellat cupiditate ullam iusto illum eaque. Repellat, voluptate modi hic autem dicta, illo optio quasi laudantium, alias enim itaque corporis ullam?</p>
                <a href="#" className="btn">Leer Mas</a>

            </div>
        </section>
    )
}

export default About;