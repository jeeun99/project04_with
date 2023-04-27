import { Link } from "react-router-dom";

function Banner({ urlName }) {
  let writeOff = urlName === "/project04_with/write" ? "off" : "";
  return (
    <div className={`Banner ${writeOff}`}>
      <div className="banCon">
        <div className="bImg">
          <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
        </div>
        <div className="bText">
          <p>알고계신 정보를 알려주세요!</p>
          <p>정보 입력하기</p>
        </div>
      </div>
      <Link to="/write"></Link>
    </div>
  );
}

export default Banner;
