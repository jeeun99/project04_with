# 리액트 프로젝트 'WITH'

리액트 웹을 활용한 장애인 편의시설 정보 제공 웹사이트

데모 링크 : [데모링크](https://jeeun99.github.io/project04_with/)

## 🙋 프로젝트 소개

리액트의 학습을 위한 웹사이트 제작 프로젝트입니다.

조원은 '이은솔, 주자명'과 함께 기획 단계 및 와이어프레임 제작을 진행하였고,

실질적인 페이지 디자인 및 퍼블리싱은 개인적으로 진행하였습니다.

첫화면은 현재 위치를 받아오게 됩니다.
원하는 장소의 도로명 주소를 검색하면 해당 위치로 지도가 이동하고, 지도상에 존재하는 마커를 리스트로 출력합니다. 우측 상단의 배너를 클릭하면
건물 정보를 등록할 수 있는 건물정보 작성 페이지가 나타나게 됩니다.

---

### ⌛ 개발 기간

2023.04.10일 ~ 2023.04.28일

### ⚙ 개발 환경

`Visual Studio code` 를 통해 개발을 진행했습니다.

팀원들과 협업은 `Figjam 및 Figma` 을 통해 진행하였습니다.

`Adobe Photoshop, Adobe Illustrator` 을 이용해 이미지 편집을 진행하였습니다.

`Figma`를 이용하여 디자인 시안 작업을 진행하였습니다.

### 📚 사용 언어

<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>

---

### 💬 참고사항

Kakao Map API를 사용해 지도 기능을 사용하였습니다. 현재 위치 출력을 위해 Geolocation을 사용하려 했으나 https환경에서만 이용 가능하기 때문에 로컬 환경에 Chocolatey 설치하였습니다.

지도 API를 사용하며, 리스트 출력시 처음에 바로 뜨지 않았던 문제점과 지도 위치 변경시 마커 내용 또한 초기화되어야 하는데 그러지 않고 계속 쌓이던 문제 또한 해결하였습니다.

처음엔 지도 컴포넌트를 분리하여 사용했으나 입력받은 값을 전달해줄 수 없어 Main이라는 하나의 컴포넌트에 합쳐서 사용했습니다.

data는 redux를 활용하여 바인딩했습니다.

---

### 🔗 링크 모음

데모 링크 : <https://jeeun99.github.io/project04_with/>

아이디어 회의 링크: [피그마\_링크](https://www.figma.com/file/lM2WAmN1Croj1Mgg4UJThD/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=0%3A1&t=3VcM0yk0C8ekw9ls-1)

Figma 링크: [이제은\_WITH](https://www.figma.com/file/w8a1kSGVFZEJynKE28h9yw/%EC%9D%B4%EC%A0%9C%EC%9D%80_4%EC%B0%A8WITH?type=design&t=xpnmkxKWJKrpX6ob-1)

약식 제안서: 아래 링크 클릭시 프레젠테이션으로 이동됩니다.
<https://docs.google.com/presentation/d/1JiNj07hzN6ivzxfYDK2Apg6LLu6c_szPmdm4r_lOV0M/edit?usp=sharing>
