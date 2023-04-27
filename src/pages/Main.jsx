import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import ListCard from "./ListCard";
import Modal from "./Modal";

const { kakao } = window;

function Main() {
  // input 값 영역
  const sInput = document.querySelector(".searchInput input");
  let [input, setInput] = useState("");
  let [add, setAdd] = useState("");
  // input 값을 다시 저장해서 전송
  const inputFunc = () => {
    input === null ? setInput([""]) : setInput([sInput.value, ...input]);
    setAdd((add = input));
  };
  // 지도 영역
  let [x, setX] = useState(Number);
  let [y, setY] = useState(Number);
  if (typeof add === "object") {
    // console.log("object");
    add = add[0];
    // console.log("add obj", add);
  } else if (typeof add === "string") {
    // console.log("string이다");
  }
  let data = useSelector((state) => state.data);
  // filter 관련 변수
  let [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (add === "") {
        // console.log("add 비어있을때");
        navigator.geolocation.getCurrentPosition((position) => {
          doSomething(position.coords.latitude, position.coords.longitude);
        });
      } else {
        // console.log("add 비어있을때의 else");
        let geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(add, function (result, status) {
          // console.log(" else addSearch 실행되나 + status", status);
          if (status === kakao.maps.services.Status.OK) {
            // console.log(result[0].y, result[0].x);
            doSomething(result[0].y, result[0].x);
          }
        });
      }
    }, 50);
    const doSomething = (x, y) => {
      setX(x);
      setY(y);
    };
    const container = document.getElementById("Map");
    const options = {
      center: new kakao.maps.LatLng(x, y),
      level: 3,
      disableZoom: true, // zoom 막는 코드
    };
    const map = new kakao.maps.Map(container, options);

    // 확대 축소 막기
    function setZoomable(zoomable) {
      map.setZoomable(zoomable);
    }
    // 드래그 막기
    function setDraggable(draggable) {
      map.setDraggable(draggable);
    }
    setZoomable(false);
    // setDraggable(false);

    // 가지고 있는 데이터로 마커 생성하기
    const markers = [];
    for (let i = 0; i < data.length; i++) {
      addMarker(
        new kakao.maps.LatLng(data[i].addX, data[i].addY),
        data[i].title
      );
    }
    function addMarker(position, title) {
      let marker = new kakao.maps.Marker({
        position: position,
        title: title,
      });
      marker.setMap(map);
      markers.push(marker);
    }
    // map에다 markers 속에 담은 마커들을 세팅
    function setMarkers(map) {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }
    // 위 과정 후 지도에 표시
    function showMarkers() {
      setMarkers(map);
    }
    function showTextMarkers() {
      for (let i = 0; i < markers.length; i++) {
        let marker = new kakao.maps.Marker({
          position: markers[i].position,
          title: markers[i].title,
        });

        let infowindow = new kakao.maps.InfoWindow({
          title: markers[i].title,
        });
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }
      function makeOverListener(map, marker, infowindow) {
        return function () {
          infowindow.open(map, marker);
        };
      }
      function makeOutListener(infowindow) {
        return function () {
          infowindow.close();
        };
      }
    }
    showMarkers();
    showTextMarkers();
    // 보이는 화면 내에 있는 마커 데이터 출력
    kakao.maps.event.addListener(
      map,
      "tilesloaded",
      function () {
        let bounds = map.getBounds();
        const visibleMarkers = [];
        let latlng = map.getCenter();

        for (let i = 0; i < markers.length; i++) {
          if (bounds.contain(markers[i].getPosition())) {
            visibleMarkers.push(markers[i]);
          }
        }
        const filteredData = visibleMarkers.reduce(
          (acc, marker) => {
            const position = marker.getTitle();
            const filtered = data.filter((a) => a.title === position);

            return [...acc, ...filtered];
          },
          [latlng]
        );
        setFilterData(filteredData);
      },
      [add]
    );
  }, [add, x, y]);

  // console.log("filterData", filterData);
  let datas = [];
  let [btnData, setBtnData] = useState([]);
  useEffect(() => {
    if (!filterData) {
      return;
    } else {
      datas = filterData.slice(1);
      setBtnData([...datas]);
      setListData([...datas]);
      // console.log("datas", datas);
    }
  }, [filterData]);
  // console.log("btnData", btnData);

  // 버튼 강제 클릭으로 리스트 바로 출력시키기 ( 대신 검색했을 경우에만 가능하도록 검색 버튼 이용)
  const buttonRef = useRef(null);
  const buttonRef2 = useRef(null);

  const handleClick = () => {
    buttonRef.current.click();
    buttonRef2.current.click();
  };

  useEffect(() => {
    buttonRef.current.click();
  }, [add]);

  let [listCount, setListCount] = useState(3);
  let [listData, setListData] = useState([]);

  return (
    <>
      <div className="Search">
        <div className="searchCon mw">
          <div className="sText">
            <p>알고싶은 장소가 있으신가요?</p>
            <p>원하시는 장소를 입력해보세요!</p>
          </div>
          <div className="searchInput">
            <input
              type="text"
              placeholder="도로명주소를 입력해주세요."
              onChange={(e) => {
                setInput(e.target.value);
                // console.log("search안 onchange", input);
              }}
            />
            <button
              onClick={() => {
                inputFunc();
                handleClick();
              }}
              ref={buttonRef2}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>

      <section className="mainSec mw">
        <div className="btns">
          <button
            className="btnMain btn_all"
            ref={buttonRef}
            onClick={() => {
              setBtnData(listData);
            }}
          >
            전체보기
          </button>
          <button
            className="btnMain btn_wc"
            onClick={() => {
              setBtnData(listData.filter((a) => a.toilet === 1));
            }}
            ref={buttonRef2}
          >
            장애인화장실
          </button>
          <button
            className="btnMain btn_s"
            onClick={() => {
              setBtnData(listData.filter((a) => a.slope === 1));
            }}
          >
            경사로
          </button>
          <button
            className="btnMain btn_e"
            onClick={() => {
              setBtnData(listData.filter((a) => a.elevator === 1));
            }}
          >
            엘리베이터
          </button>
          <button
            className="btnMain btn_a"
            onClick={() => {
              setBtnData(listData.filter((a) => a.automaticDoor === 1));
            }}
          >
            자동문
          </button>
          <button
            className="btnMain btn_b"
            onClick={() => {
              setBtnData(listData.filter((a) => a.braille === 1));
            }}
          >
            점자
          </button>
        </div>
        <div id="Map"></div>
      </section>
      <section className="forCards mw">
        <ul className="listCon">
          {btnData.map((item, i) => {
            return <ListCard item={item} key={i} />;
          })}
        </ul>
      </section>
    </>
  );
}

export default Main;
