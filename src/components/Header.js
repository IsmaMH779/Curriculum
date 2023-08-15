import { useState } from "react";


const Header = () => {
    const [togglenavbar, setTogglenavbar] = useState(false);
    // toggle navbar icon
    const toggle_navbar = () => {
        setTogglenavbar(!togglenavbar)
    };
    window.onscroll = () => {
        let header = document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY > 100)
        // close navbar when scroll
        setTogglenavbar(false)
    };


    return (
        <header className="header">
            <a href="" className="title">Ismael Mehdi</a>

            <i class={togglenavbar ? "bx bx-x" : 'bx bx-menu'} id="menu-icon" onClick={toggle_navbar}></i>

            <nav className={togglenavbar ? "navbar active" : "navbar"}>
                <a href="#home" className="active">Home</a>
                <a href="#about">Acerca de mi</a>
                <a href="#services">Skills</a>
                <a href="#portfolio">Proyectos</a>
                <a href="#contact">Contacto</a>
            </nav>
        </header>
    )
}

export default Header;