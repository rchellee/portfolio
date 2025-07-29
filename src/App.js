import { useState, useEffect } from "react";
import {
  FaSearch,
  FaArrowUp,
  FaTimes,
  FaBars,
  FaDesktop,
  FaPaintBrush,
  FaChartLine,
  FaCameraRetro,
  FaTabletAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { FaAndroid } from "react-icons/fa6";
import "./App.css";
import girl from "./assets/me.png";
import about from "./assets/about.JPG";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const hideMenu = () => {
    setIsMenuActive(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    hideMenu();
  };

  return (
    <div className="App">
      {/* Scroll to top button */}
      <div className={`scroll-button ${isSticky ? "visible" : ""}`}>
        <a href="#home">
          <FaArrowUp />
        </a>
      </div>

      {/* Navigation */}
      <nav className={isSticky ? "sticky" : ""}>
        <div className="navbar">
          <div className="logo">
            <a href="#home">Portfolio.</a>
          </div>

          <ul className={`menu ${isMenuActive ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={hideMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={hideMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={hideMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#services" onClick={hideMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={hideMenu}>
                Contact
              </a>
            </li>
            <div className="search-box">
              <input type="text" placeholder="Search here..." />
              <button className="search-btn" aria-label="Search">
                <FaSearch />
              </button>
            </div>
            <div className="cancel-btn" onClick={hideMenu}>
              <FaTimes />
            </div>
          </ul>

          <div className="media-icons">
            <a
              href="https://www.facebook.com/ritchelle.rueras.71"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/its_rchelle?t=_8ArWFOmakl7on9ewUQAJQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/rtch_elle?igsh=MW9hbnFxdGpiM2k0OQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/ritchelle-rueras?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="t.me/rtch_elle" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="menu-btn" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <div className="text-content">
            <div className="text">Hello, It's Me </div>
            <div className="name">Ritchelle Rueras</div>
            <div className="job">
              <div className="job">
                <span>An</span>
                <div className="typing-text">
                <span className="one">Aspiring </span>
                  <span className="two">Web </span>
                  <span className="three">Developer.</span>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => scrollToSection("about")}>About Me</button>
              <button onClick={() => scrollToSection("contact")}>
                Follow Me
              </button>
            </div>
          </div>
          <div className="girl">
            <img src={girl} alt="Ritchelle Rueras" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>About Me</span>
          </div>
          <div className="about-details">
            <div className="left">
              <img src={about} alt="About me" />
            </div>
            <div className="right">
              <div className="topic">Tech Is My Passion</div>
              <p>
                A fresh Information Systems graduate from Technological
                University of the Philippines with experience in office
                administration, database management, and web development.
                Proficient in Microsoft Office, MySQL, and modern technologies
                like React.js and PHP, I've applied my skills at SEADON Maritime
                Services and through internship at Mariana Academy. While I'm
                beginning my professional journey, I bring hands-on experience
                with React.js, PHP, and MySQL from academic projects. I'm
                particularly interested in opportunities where I can contribute
                to backend systems while expanding my frontend capabilities.
                What I lack in experience I make up for in dedication, quick
                learning ability, and enthusiasm for creating well-structured
                digital solutions.
              </p>
              <div className="button">
                <button>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="content">
          <div className="title">
            <span>My Skills</span>
          </div>
          <div className="skills-details">
            <div className="text">
              <div className="topic">Skills Reflects Our Knowledge</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                natus tenetur tempora? Quasi, rem quas omnis. Porro rem
                aspernatur reiciendis ut praesentium minima ad, quos, officia!
                Illo libero, et, distinctio repellat sed nesciunt est modi
                quaerat placeat. Quod molestiae, alias?
              </p>
              <div className="experience">
                <div className="num">10</div>
                <div className="exp">
                  Years Of <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="topic">HTML</div>
                <div className="per">90%</div>
              </div>
              <div className="box">
                <div className="topic">CSS</div>
                <div className="per">80%</div>
              </div>
              <div className="box">
                <div className="topic">JavScript</div>
                <div className="per">70%</div>
              </div>
              <div className="box">
                <div className="topic">PHP</div>
                <div className="per">60%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="content">
          <div className="title">
            <span>My Services</span>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <FaDesktop />
              </div>
              <div className="topic">Web Devlopment</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <FaPaintBrush />
              </div>
              <div className="topic">Graphic Design</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <FaChartLine />
              </div>
              <div className="topic">Digital Marketing</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <FaAndroid />
              </div>
              <div className="topic">Icon Design</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <FaCameraRetro />
              </div>
              <div className="topic">Photography</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <FaTabletAlt />
              </div>
              <div className="topic">Apps Devlopment</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="content">
          <div className="title">
            <span>Contact Me</span>
          </div>
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              neque ipsum corrupti dolores, facere numquam voluptate aspernatur
              sit perferendis qui nisi modi! Recusandae deserunt consequatur
              voluptatibus alias repellendus nobis eligendi.
            </p>
            <div className="button">
              <button>Let's Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="text">
          <span>
            Created By <a href="#home">Portfolio</a> | &#169;{" "}
            {new Date().getFullYear()} All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
