import About from "./main.components/About";
import Home from "./main.components/Home";
import Portfolio from "./main.components/Portfolio";
import Services from "./main.components/Services";
import Contact from "./main.components/Contact"
const Main = () => {

    return (
        <main>
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </main>);
};

export default Main;