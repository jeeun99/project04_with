function ListCard({ item }) {
  return (
    <li className="list">
      <div className="lImg">
        <img src={`${process.env.PUBLIC_URL}${item.Img}`} alt="bd1" />
      </div>
      <div className="lText">
        <div className="bdInfo">
          <p>{item.title}</p>
          <div className="openTime">
            <p>OPEN TO CLOSE</p>
            <p>{item.hours}</p>
          </div>
        </div>
        <div className="address">
          <p>도로명주소</p>
          <p>{item.address}</p>
        </div>
        <div className="facility">
          <p>시설</p>
          <div className="things">
            {item.elevator === 1 ? <p>#엘리베이터</p> : <p hidden></p>}
            {item.toilet === 1 ? <p>#장애인화장실</p> : <p hidden></p>}
            {item.automaticDoor === 1 ? <p>#자동문</p> : <p hidden></p>}
            {item.braille === 1 ? <p>#점자</p> : <p hidden></p>}
            {item.slope === 1 ? <p>#경사로</p> : <p hidden></p>}
          </div>
        </div>
      </div>
    </li>
  );
}

export default ListCard;
