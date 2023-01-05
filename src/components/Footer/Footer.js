import "./footer.css";
import { FaMailBulk, FaHome, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <p>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Latvia
            </p>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              esenileaf@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>This is me Inese Lapina. I enjoy exploring web development.</p>
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/inese-lapina-295561243"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/lapinna"
            >
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
