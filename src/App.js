import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";
import "./assets/css/style.css"
import { useEffect } from "react";

function App() {

  let sections = document.querySelectorAll('section')
  let navlinks = document.querySelector('header nav a')

  window.onscroll = () => {
    sections.forEach(s => {
      let top = window.scrollY;
      let offset = s.offsetTop - 150;
      let height = s.offsetHeight;
      let id = s.getAttribute('id')

      if (top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });
  };

  // scrollreaveal


  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
  }, [])





  return (
    < >
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
