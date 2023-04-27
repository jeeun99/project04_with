import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="hd">
      <h1>
        <Link to="/project04_with/">
          <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
        </Link>
      </h1>
    </header>
  );
}

export default Header;
