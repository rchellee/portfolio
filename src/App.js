import { useState, useEffect } from "react";
import {
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
  FaBriefcase,
  FaCalendar,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarker,
  FaRegClock,
  FaGithub,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaAndroid } from "react-icons/fa6";
import "./App.css";

//IMAGES AND FILES
import girl from "./assets/me.png";
import about from "./assets/about.JPG";
import gtechPDF from "./assets/gtech.pdf";
import marianaBg from "./assets/mariana.png";
import seadonBg from "./assets/SEADON.png";
import teleperformanceBg from "./assets/TP.jpg";
import portfolioBg from "./assets/portfolio-bg.png";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const resumeLink =
    "https://www.canva.com/design/DAG-2r78ojI/_p-LB_N8q5fRBRMQUnMm4Q/view?utm_content=DAG-2r78ojI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6808e672bb";

  const portfolioLink = "https://ritchelleportfolio.netlify.app";

  // Contact Information
  const contactInfo = {
    email: "ritchellerueras@gmail.com",
    phone: "09709573613",
    location: "Metro Manila, Philippines",
    responseTime: "24-48 hours",
    tagline:
      "Providing innovative IT solutions and data-driven systems for modern businesses.",
    socials: {
      facebook: "https://www.facebook.com/ritchelle.rueras.71",
      twitter: "https://x.com/its_rchelle?t=_8ArWFOmakl7on9ewUQAJQ&s=09",
      instagram:
        "https://www.instagram.com/rtch_elle?igsh=MW9hbnFxdGpiM2k0OQ==",
      linkedin:
        "https://www.linkedin.com/in/ritchelle-rueras?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      telegram: "t.me/rtch_elle",
      github: "https://github.com/yourusername", // Add your GitHub
    },
  };

  // Quick links for footer navigation
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
  ];

  // Experience data array
  const experiences = [
    {
      company: "Mariana Academy of Maritime Studies, Inc.",
      role: "Quality Management",
      date: "2025",
      location: "Metro Manila, Philippines",
      backgroundImage: marianaBg,
      responsibilities: [
        "Completed on-the-job training in the Quality Management Department",
        "Managed and organized documents while assisting with digital record maintenance and data entry",
      ],
    },
    {
      company: "SEADON MARITIME SERVICES",
      role: "Office Staff",
      date: "2025",
      location: "Metro Manila, Philippines",
      backgroundImage: seadonBg,
      responsibilities: [
        "Responsible for managing social media pages",
        "Addressed seafarer inquiries",
        "Assisted with the enrollment of seafarers in training programs",
      ],
    },
    {
      company: "Teleperformance EDSA Greenfield",
      role: "Operations Customer Expert I",
      date: "2025-2026",
      location: "Mandaluyong City, Manila, Philippines",
      backgroundImage: teleperformanceBg,
      responsibilities: [
        "Assisted customers with account and service concerns through computer-based support systems",
        "Troubleshoot device, connectivity, and signal issues",
        "Maintained accurate documentation and high service quality",
      ],
    },
  ];

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

  const nextExperience = () => {
    setCurrentExperience((prev) =>
      prev === experiences.length - 1 ? 0 : prev + 1,
    );
  };

  const prevExperience = () => {
    setCurrentExperience((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1,
    );
  };

  const goToExperience = (index) => {
    setCurrentExperience(index);
  };

  const openPortfolio = () => {
    window.open(portfolioLink, "_blank");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
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
              <a href="#experiences" onClick={hideMenu}>
                Experiences
              </a>
            </li>
            <li>
              <a href="#projects" onClick={hideMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#certificates" onClick={hideMenu}>
                Certificates
              </a>
            </li>
            <li>
              <a href="#contact" onClick={hideMenu}>
                Contact
              </a>
            </li>
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
            <div className="text">Hey! It's Me </div>
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
              <button onClick={() => window.open(resumeLink, "_blank")}>
                My CV
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
              <div className="topic">Academic & Project Experience</div>
              <p>
                As a fresh graduate, my skills have been developed through
                coursework, thesis projects, and personal learning. While I may
                not have professional experience yet, I've gained practical
                knowledge in these technologies through hands-on academic
                projects and self-study.
              </p>
              <div className="experience">
                <div className="num">4</div>
                <div className="exp">
                  Years Of <br />
                  Academic Focus
                </div>
              </div>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="topic">Microsoft Office</div>
                <div className="per">90%</div>
              </div>
              <div className="box">
                <div className="topic">C Languange</div>
                <div className="per">70%</div>
              </div>
              <div className="box">
                <div className="topic">C++ </div>
                <div className="per">75%</div>
              </div>
              <div className="box">
                <div className="topic">Database (MySQL)</div>
                <div className="per">80%</div>
              </div>
              <div className="box">
                <div className="topic">Web Dev (React.js)</div>
                <div className="per">75%</div>
              </div>
              <div className="box">
                <div className="topic">JavScript</div>
                <div className="per">70%</div>
              </div>
              <div className="box">
                <div className="topic">PHP</div>
                <div className="per">60%</div>
              </div>
              <div className="box">
                <div className="topic">Python</div>
                <div className="per">65%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section
        className="experiences"
        id="experiences"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 248, 255, 0.03), rgba(240, 248, 255, 0.68)), url(${experiences[currentExperience].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="content">
          <div className="title">
            <span>My Experiences</span>
          </div>

          <div className="experiences-slider">
            {/* Navigation Buttons */}
            <button
              className="slider-nav-btn prev-btn"
              onClick={prevExperience}
              aria-label="Previous experience"
            >
              <FaChevronLeft />
            </button>

            {/* Experience Card */}
            <div className="experience-card active">
              <div className="experience-header">
                <div className="company-icon">
                  <FaBriefcase />
                </div>
                <div className="company-info">
                  <h3 className="company-name">
                    {experiences[currentExperience].company}
                  </h3>
                  <div className="experience-details">
                    <span className="experience-role">
                      {experiences[currentExperience].role}
                    </span>
                    <div className="experience-meta">
                      <span className="experience-date">
                        <FaCalendar /> {experiences[currentExperience].date}
                      </span>
                      <span className="experience-location">
                        <FaMapMarkerAlt />{" "}
                        {experiences[currentExperience].location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience-description">
                <ul>
                  {experiences[currentExperience].responsibilities.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="slider-nav-btn next-btn"
              onClick={nextExperience}
              aria-label="Next experience"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="slider-dots">
            {experiences.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentExperience ? "active" : ""}`}
                onClick={() => goToExperience(index)}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>

          {/* Experience Counter */}
          <div className="experience-counter">
            <span className="current-index">{currentExperience + 1}</span>
            <span className="divider">/</span>
            <span className="total-experiences">{experiences.length}</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="content">
          <div className="title">
            <span>My Projects</span>
          </div>
          <div className="boxes">
            {/* Portfolio Project - Featured */}
            <div
              className="box portfolio-box"
              onClick={openPortfolio}
              style={{
                cursor: "pointer",
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${portfolioBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="icon">
                <FaDesktop />
              </div>
              <div className="topic">
                Personal Portfolio
                <FaExternalLinkAlt
                  style={{ fontSize: "0.8rem", marginLeft: "8px" }}
                />
              </div>
              <p>
                My personal portfolio website built with React.js. Showcases my
                skills, experiences, and projects in a modern, responsive
                design.
              </p>
              <span className="project-link">View Live →</span>
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

      {/* Certificates Section */}
      <section className="certificates" id="certificates">
        <div className="content">
          <div className="title">
            <span>My Certificates</span>
          </div>

          <Swiper
            modules={[Pagination, Navigation]}
            loop={true}
            spaceBetween={30}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="card-wrapper"
          >
            <SwiperSlide className="card-item">
              <a
                href={gtechPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <div
                  className="card-image"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f7ff",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#5372F0",
                  }}
                >
                  View PDF Certificate
                </div>

                <p className="badge badge-designer">Certificate</p>
                <h2 className="card-title">G-Tech Summit 2025</h2>
              </a>
            </SwiperSlide>

            <SwiperSlide className="card-item">
              <a
                href={gtechPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <div
                  className="card-image"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f7ff",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#5372F0",
                  }}
                >
                  View PDF Certificate
                </div>

                <p className="badge badge-developer">Certificate</p>
                <h2 className="card-title">React.js Training</h2>
              </a>
            </SwiperSlide>

            <SwiperSlide className="card-item">
              <a
                href={gtechPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <div
                  className="card-image"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f7ff",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#5372F0",
                  }}
                >
                  View PDF Certificate
                </div>

                <p className="badge badge-marketer">Certificate</p>
                <h2 className="card-title">Database Management</h2>
              </a>
            </SwiperSlide>
            <SwiperSlide className="card-item">
              <a
                href={gtechPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <div
                  className="card-image"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f7ff",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#5372F0",
                  }}
                >
                  View PDF Certificate
                </div>
                
                <p className="badge badge-marketer">Certificate</p>
                <h2 className="card-title">Database Management</h2>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Unified Contact & Footer Section */}
      <footer className="site-footer" id="contact">
        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Brand & Tagline */}
            <div className="footer-brand">
              <h2 className="footer-logo">Ritchelle Rueras</h2>
              <p className="footer-tagline">{contactInfo.tagline}</p>
              <div className="footer-response">
                <FaRegClock />
                <span>
                  Typically responds within {contactInfo.responseTime}
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} onClick={hideMenu}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="footer-contact">
              <h3>Contact Info</h3>
              <div className="contact-details-list">
                <div
                  className="contact-item"
                  onClick={() => copyToClipboard(contactInfo.email)}
                >
                  <FaEnvelope />
                  <div className="contact-text">
                    <span className="label">Email</span>
                    <span className="value">{contactInfo.email}</span>
                  </div>
                </div>
                <div
                  className="contact-item"
                  onClick={() => copyToClipboard(contactInfo.phone)}
                >
                  <FaPhone />
                  <div className="contact-text">
                    <span className="label">Phone</span>
                    <span className="value">{contactInfo.phone}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <FaMapMarker />
                  <div className="contact-text">
                    <span className="label">Location</span>
                    <span className="value">{contactInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="footer-form-section">
            <h3>Send Me a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links & Copyright */}
          <div className="footer-bottom">
            <div className="social-links">
              <a
                href={contactInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href={contactInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaTwitter />
              </a>
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href={contactInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href={contactInfo.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaTelegram />
              </a>
              <a
                href={contactInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
            </div>
            <div className="copyright">
              <p>
                &copy; {new Date().getFullYear()} Ritchelle Rueras. All Rights
                Reserved.
              </p>
              <p className="credit">Designed & Built by Ritchelle Rueras</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
