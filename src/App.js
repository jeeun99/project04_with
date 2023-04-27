import "./css/App.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Banner from "./pages/Banner";
import Main from "./pages/Main";
import Write from "./pages/Write";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  let urlName = useLocation().pathname;
  return (
    <div className="App">
      <Header />
      <Banner urlName={urlName} />
      <Routes>
        <Route path="/project04_with/" element={<Main urlName={urlName} />} />
        <Route path="*" element={<Main urlName={urlName} />} />

        <Route path="/project04_with/write" element={<Write />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
