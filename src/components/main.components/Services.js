const Services = () => {
    var data = require("../../assets/json/information.json")
    var serdata = data.services;
    return (
        <section className="services" id="services">
            <h2 className="heading">Mis <span>Conocimientos</span></h2>

            <div className="services-container">
                <div className="services-box">
                    <i class={serdata[0].icon}></i>
                    <h3>{serdata[0].title}</h3>
                    <p>{serdata[0].inf}</p>
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i class={serdata[1].icon}></i>
                    <h3>{serdata[1].title}</h3>
                    <p>{serdata[1].inf}</p>
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i class={serdata[2].icon}></i>
                    <h3>{serdata[2].title}</h3>
                    <p>{serdata[2].inf}</p>
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    )
}

export default Services;