import React, { useState } from "react";
import Layout from "../layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";

const Pages = () => {
  const [courses, setCourses] = useState([
    { id: 1, courseName: "Python Django", rating: 4, placementRate: "89%" },
    { id: 2, courseName: "Ruby on Rails", rating: 3, placementRate: "86%" },
    { id: 3, courseName: "MERN stack ", rating: 5, placementRate: "96%" },
    { id: 4, courseName: "MEAN stack ", rating: 4, placementRate: "92%" },
    { id: 5, courseName: "AI development", rating: 5, placementRate: "97%" },
    { id: 6, courseName: "Data Science", rating: 4, placementRate: "90%" },
    { id: 7, courseName: "Big Data Analysis", rating: 4, placementRate: "92%" },
    { id: 8, courseName: "Machine Learning", rating: 5, placementRate: "92%" },
  ]);
  return (
    <>
      <BrowserRouter>
        <Layout courses={courses}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Pages;
