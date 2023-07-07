import React, { useState } from "react";
import Layout from "../layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses-page/Courses";

const Pages = () => {
 
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Pages;
