import React, { useContext, useState } from "react";
import "./home.css";
import { CourseDataContext } from "../CourseDataContext";
import { Rating } from "@mui/material";

const Home = () => {
  const { courses, setCourses, reviews, setReviews } =
    useContext(CourseDataContext);
  const sortedCourses = courses.sort((a, b) => b.rating - a.rating);
  const topTwoCourses = sortedCourses.slice(0, 2);
 
  return (
    <>
      <section className="banner container-fluid">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="wrapper">
            <h1>Welcome to Limenzy's Course Listing App</h1>
          </div>
        </div>
      </section>
      <section className="top-courses container-fluid py-5">
        <div className="container">
          <div className="row text-center">
            <h1 className="mb-5">Our Top Rated Courses</h1>
            {topTwoCourses.map((course) => {
              return (
                <div className="cards col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="card px-3 py-4 align-items-center">
                    <h1>{course.courseName}</h1>
                    <Rating  name="read-only" value={course.rating} readOnly />
                    <p>placement rate : {course.placementRate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container-fluid reviews py-5">
        <div className="container text-center">
          <h1 className="mb-5">User reivews</h1>
          <div className="row user-reviews">
            {reviews.map((review) => {
              return (
                <div className="cards col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="card-wrap px-3 py-4">
                    <p> user name : {review.reviwer}</p>
                    <p>{review.courseName}</p>
                    <p>{review.review}</p>
                    <Rating name="read-only" value={review.rating} readOnly />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
