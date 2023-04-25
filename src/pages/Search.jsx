function Search({ urlName }) {
  let writeOff = urlName === "/write" ? "off" : "";

  return (
    <div className="Search">
      <div className="searchCon mw">
        <div className={`sText ${writeOff}`}>
          <p>알고싶은 장소가 있으신가요?</p>
          <p>원하시는 장소를 입력해보세요!</p>
        </div>
        <div className={`searchInput ${writeOff}`}>
          <input type="text" placeholder="도로명주소를 입력해주세요." />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className={`textWrite ${writeOff}`}>
          <p>장애인 편의시설이 위치한 건물을 알고 계신다면</p>
          <p>건물 정보를 알려주세요 !</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
