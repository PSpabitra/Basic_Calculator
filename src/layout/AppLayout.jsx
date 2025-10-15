import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Display from "../components/Display";
import Inputs from "../components/Inputs";

function AppLayout() {
  return (
    <div className=" w-screen h-screen text-center  flex flex-col justify-center items-center gap-8">
      <Header />
      <div className="flex flex-col  bg-gray-200 shadow-xl w-3xl h-[80vh] rounded-2xl">
        <Display />
        <Inputs />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
