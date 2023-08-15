

const Header = () => {
    let menuIcon = document.querySelector("#menu-icon")
    let navbar = document.querySelector(".navbar")

    // toggle navbar icon
    const toggle_navbar = () => {
        console.log(menuIcon)
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle('active');
    };
    window.onscroll = () => {
        let header = document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY > 100)
        // close navbar when scroll
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove('active');
    };


    return (
        <header className="header">
            <a href="" className="title">Ismael Mehdi</a>

            <i class='bx bx-menu' id="menu-icon" onClick={toggle_navbar}></i>

            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">Acerca de mi</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Proyectos</a>
                <a href="#contact">Contacto</a>
            </nav>
        </header>
    )
}

export default Header;