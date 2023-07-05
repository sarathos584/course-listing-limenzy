import React, { useContext } from "react";
import "./home.css";
import { CourseDataContext } from "../CourseDataContext";

const Home = () => {
  const { courses, setCourses } = useContext(CourseDataContext);
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
      <section className="top-courses container-fluid">
        <div className="container">
          <div className="row text-center">
            <h1>Our Top Rated Courses</h1>
            {
                topTwoCourses.map(course=>{
                    return (
                        <div className="card col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h1>{course.courseName}</h1>
                            <p>rating: {course.rating}</p>
                            <p>placement rate : {course.placementRate}</p>
                        </div>
                    )
                })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
