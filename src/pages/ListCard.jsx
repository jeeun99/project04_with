function ListCard() {
  return (
    <li className="list">
      <div className="lImg">
        <img src={`${process.env.PUBLIC_URL}/img/BD_1.jpg`} alt="bd1" />
      </div>
      <div className="lText">
        <div className="bdInfo">
          <p>빌딩이름</p>
          <div className="openTime">
            <p>OPEN TO CLOSE</p>
            <p>09:00 ~ 20:00</p>
          </div>
        </div>
        <div className="address">
          <p>도로명주소</p>
          <p>대전 서구 대덕대로 211 갤러리아 타임월드</p>
        </div>
        <div className="facility">
          <p>시설</p>
          <div className="things">
            <p>#엘리베이터</p>
            <p>#장애인화장실</p>
            <p>#자동문</p>
            <p>#점자</p>
            <p>#경사로</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ListCard;
