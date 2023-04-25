import { useNavigate } from "react-router-dom";

function Modal() {
  let navigate = useNavigate();
  return (
    <div className="modalCon on">
      <div className="modal">
        <p>건물이름</p>
        <button
          className="btnClose"
          onClick={() => {
            navigate(-1);
          }}
        >
          닫기
        </button>
        <div className="contents">
          <div className="toilet">
            <p>#장애인화장실</p>
            <div className="imgs">
              <img
                src={`${process.env.PUBLIC_URL}/img/toiletImg_01.jpg`}
                alt="toilet"
              />
            </div>
          </div>
          <div className="elevator">
            <p>#엘리베이터</p>
            <div className="imgs">
              <img
                src={`${process.env.PUBLIC_URL}/img/elevatorImg_01.jpg`}
                alt="elevator"
              />
            </div>
          </div>
          <div className="slope">
            <p>#경사로</p>
            <div className="imgs">
              <img
                src={`${process.env.PUBLIC_URL}/img/slopeImg_01.jpg`}
                alt="slope"
              />
            </div>
          </div>
          <div className="autoDoor">
            <p>#자동문</p>
            <div className="imgs">
              <img
                src={`${process.env.PUBLIC_URL}/img/automaticDoorImg_01.jpg`}
                alt="autoDoor"
              />
            </div>
          </div>
          <div className="braille">
            <p>#점자</p>
            <div className="imgs">
              <img
                src={`${process.env.PUBLIC_URL}/img/brailleImg_01.jpg`}
                alt="braille"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
