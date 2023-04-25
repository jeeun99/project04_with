import Map from "./Map";
function Main() {
  return (
    <section className="mainSec mw">
      <div className="btns">
        <button className="btnMain btn_all">전체보기</button>
        <button className="btnMain btn_wc">장애인화장실</button>
        <button className="btnMain btn_s">경사로</button>
        <button className="btnMain btn_e">엘리베이터</button>
        <button className="btnMain btn_a">자동문</button>
        <button className="btnMain btn_b">점자</button>
      </div>
      <Map />
    </section>
  );
}

export default Main;
