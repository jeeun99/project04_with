import { useNavigate } from "react-router-dom";

function Write() {
  let navigate = useNavigate();
  return (
    <section className="writeSec mw">
      <div className="textInput">
        <div className="bdName">
          <p>건물명</p>
          <input type="text" placeholder="건물명을 입력해주세요." />
        </div>
        <div className="addInput">
          <p>도로명주소</p>
          <input type="text" placeholder="도로명주소를 입력해주세요." />
        </div>
        <div className="timeInput">
          <p>영업시간</p>
          <input type="text" placeholder="영업시간을 입력해주세요." />
        </div>
      </div>
      <div className="facliltyInput">
        <p>시설 종류</p>
        <div className="ckbox">
          <label htmlFor="toilet">
            <input type="checkbox" name="toilet" id="toilet" /> 장애인화장실
          </label>
          <label htmlFor="slope">
            <input type="checkbox" name="slope" id="slope" /> 경사로
          </label>
          <label htmlFor="elevator">
            <input type="checkbox" name="elevator" id="elevator" /> 엘리베이터
          </label>
          <label htmlFor="autoDoor">
            <input type="checkbox" name="autoDoor" id="autoDoor" /> 자동문
          </label>
          <label htmlFor="braille">
            <input type="checkbox" name="braille" id="braille" /> 점자
          </label>
        </div>
        <div className="imageInput">
          <div className="imgbox">
            <p>이미지를 올려주세요.</p>
          </div>
          <input type="file" name="image" id="imgInputs" />
        </div>
      </div>
      <div className="btns">
        <button
          className="btn_back"
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </button>
        <button
          className="btn_submit"
          onClick={() => {
            navigate("/");
          }}
        >
          제출하기
        </button>
      </div>
    </section>
  );
}

export default Write;
