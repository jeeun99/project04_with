import "./css/App.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Banner from "./pages/Banner";
import Main from "./pages/Main";
import Modal from "./pages/Modal";
import Write from "./pages/Write";

import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  let urlName = useLocation().pathname;
  return (
    <div className="App">
      <Header />
      <Banner urlName={urlName} />
      <Routes>
        <Route path="/" element={<Main urlName={urlName} />} />
        <Route path="*" element={<Main urlName={urlName} />} />

        <Route path="/write" element={<Write />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
