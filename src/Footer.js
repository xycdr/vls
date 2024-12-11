import { Link } from "react-router-dom";
import React from "react";
import data from "./data/footer.json";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const footer = data.footer;

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case "facebook":
        return <FaFacebook />;
      case "instagram":
        return <FaInstagram />;
      case "whatsapp":
        return <FaWhatsapp />;
      default:
        return null;
    }
  };

  return (
    <footer className="footer-section section box-shadow-2">
      <div className="site-footer container">
        <div className="footer-card margin-block-end-10">
          <h2 className="fw-bold fs-500 uppercase margin-block-end-2">ABOUT</h2>
          <p className="fs-200">{footer.brand_desc}</p>
        </div>
        <div className="wrapper flow">
          <div className="footer-card">
            <h3 className="fw-bold fs-500 uppercase margin-block-end-2">
              Content
            </h3>
            <ul className="content-list">
              <li className="fs-200 clr-primary-000">
                <Link to="/">Home</Link>
              </li>
              <li className="fs-200 clr-primary-000">
                <Link to="/articles">Articles</Link>
              </li>
              <li className="fs-200 clr-primary-000">
                <Link to="/about">About</Link>
              </li>
              <li className="fs-200 clr-primary-000">
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-card">
            <h3 className="fw-bold fs-500 uppercase margin-block-end-2">
              Social Media
            </h3>
            <ul className="social-media-icons">
              {footer.social_media.map((social) => (
                <li key={social.name} className="fs-200 clr-primary-000">
                  <Link
                    target="_blank"
                    to={social.link}
                    aria-label={social.name}
                    rel="noopener noreferrer" // Menambahkan rel untuk keamanan
                  >
                    {getSocialIcon(social.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="copyright-section text-center">
          <p className="fs-200 mt-0">
            © 2012 yakangcoder. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
