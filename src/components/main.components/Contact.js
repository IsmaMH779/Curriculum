const Contact = () => {
    return (
        <section className="contact" id="contact" >
            <h2 className="heading">Envíame un <span>mensaje</span></h2>
            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo" />
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Numero" />
                    <input type="text" placeholder="Asunto" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Tu mensaje"></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    )
}

export default Contact;