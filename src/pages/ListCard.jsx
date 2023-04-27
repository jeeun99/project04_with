import { useState } from "react";
import Modal from "./Modal";

function ListCard({ item }) {
  // console.log("listCard", item);
  let [on, setOn] = useState(false);
  return (
    <li
      className="list"
      onClick={() => {
        setOn(!on);
      }}
    >
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
            {item.elevator === 1 ? <p>#엘리베이터</p> : null}
            {item.toilet === 1 ? <p>#장애인화장실</p> : null}
            {item.automaticDoor === 1 ? <p>#자동문</p> : null}
            {item.braille === 1 ? <p>#점자</p> : null}
            {item.slope === 1 ? <p>#경사로</p> : null}
          </div>
        </div>
      </div>
      {on === true ? (
        <Modal item={item} setOn={setOn} on={on} />
      ) : (
        <div hidden></div>
      )}
    </li>
  );
}

export default ListCard;
