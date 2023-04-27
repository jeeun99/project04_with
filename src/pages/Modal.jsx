function Modal({ item, on, setOn }) {
  return (
    <div className="modalCon on">
      <div className="modal">
        <p>{item.title}</p>
        <button
          className="btnClose"
          onClick={() => {
            setOn(!on);
          }}
        >
          닫기
        </button>
        <div className="contents">
          {item.elevator === 1 ? (
            <div className="elevator">
              <p>#엘리베이터</p>
              <div className="imgs">
                <img
                  src={`${process.env.PUBLIC_URL}${item.elevatorImg}.jpg`}
                  alt="elevator"
                />
              </div>
            </div>
          ) : null}
          {item.toilet === 1 ? (
            <div className="toilet">
              <p>#장애인화장실</p>
              <div className="imgs">
                <img
                  src={`${process.env.PUBLIC_URL}${item.toiletImg}.jpg`}
                  alt="toilet"
                />
              </div>
            </div>
          ) : null}
          {item.automaticDoor === 1 ? (
            <div className="autoDoor">
              <p>#자동문</p>
              <div className="imgs">
                <img
                  src={`${process.env.PUBLIC_URL}${item.automaticDoorImg}.jpg`}
                  alt="autoDoor"
                />
              </div>
            </div>
          ) : null}
          {item.braille === 1 ? (
            <div className="braille">
              <p>#점자</p>
              <div className="imgs">
                <img
                  src={`${process.env.PUBLIC_URL}${item.brailleImg}.jpg`}
                  alt="braille"
                />
              </div>
            </div>
          ) : null}
          {item.slope === 1 ? (
            <div className="slope">
              <p>#경사로</p>
              <div className="imgs">
                <img
                  src={`${process.env.PUBLIC_URL}${item.slopeImg}.jpg`}
                  alt="slope"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Modal;
