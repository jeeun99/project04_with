import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const { kakao } = window;

function Map() {
  let [x, setX] = useState(Number);
  let [y, setY] = useState(Number);

  let data = useSelector((state) => state.data);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      doSomething(position.coords.latitude, position.coords.longitude);
    });
    const doSomething = (x, y) => {
      setX(x);
      setY(y);
    };
    const container = document.getElementById("Map");
    const options = {
      center: new kakao.maps.LatLng(x, y),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

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
    function setMarkers(map) {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }
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
  }, [x]);

  return <div id="Map"></div>;
}

export default Map;
