import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="ft">
      <div className="mw">
        <div className="links">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
          </Link>
          <div>
            <Link to="/">서비스</Link>
            <Link to="/">문의</Link>
            <Link to="/">고객센터</Link>
          </div>
        </div>

        <div className="social">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-discord"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
