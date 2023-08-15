import rankedly from "../../assets/img/Logo-Rankedly.jpg"

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Ultimos <span>Proyectos</span></h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={rankedly} alt="" />
                    <div className="portfolio-layer">
                        <h4>Rankedly</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iust</p>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={rankedly} alt="" />
                    <div className="portfolio-layer">
                        <h4>Rankedly</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iust</p>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={rankedly} alt="" />
                    <div className="portfolio-layer">
                        <h4>Rankedly</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iust</p>
                        <a href="#"><i class='bx bx-link-external'></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;