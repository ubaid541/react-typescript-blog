import { useState } from "react";

// import './App.css'
import { Navbar } from "./Components/index";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/index";
function App() {
  return (
    <>
      <div className=" flex  bg-[#09090B] w-full min-h-screen items-center justify-center ">
        <div style={{ maxWidth: "48rem" }} className="w-full px-4">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
