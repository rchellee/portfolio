import "./App.css";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import girl from "./assets/me.png";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="navbar">
            <div className="logo">
              <p>myPortfolio</p>
            </div>
            <ul className="menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              
            </ul>
            <div className="search-box">
              <input type="text" placeholder="Search here..." />
              <a href="/">
                <FaSearch />
              </a>
            </div>
          </div>
        </nav>
        <div className="content">
          <div className="text-content">
            <div className="text">Hello, It's Me </div>
            <div className="name">Ritchelle Rueras</div>
            <div className="job">
              <div className="job">
                <span>And I'm a</span>
                <div className="typing-text">
                  <span className="one">Web </span>
                  <span className="two">Developer</span>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button>About Me</button>
              <button>Follow Me</button>
            </div>
          </div>
          <div className="girl">
            <img src={girl} alt="Ritchelle Rueras" />
          </div>
        </div>
        <div className="media-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
