import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { CourseDataContext } from "./CourseDataContext";

function AddCourse(props) {
 
  const { courses, setCourses } = useContext(CourseDataContext);
  const [courseNameInput, setCourseName] = useState("");
  const [ratingInput, setRatingInput] = useState("");
  const [placementInput, setPlacementInput] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newCourse = {
      id: Math.random(),
      courseName: courseNameInput,
      placementRate: placementInput,
      rating: ratingInput,
    };
    setCourses((prevValue) => prevValue.concat(newCourse));
    setCourseName('')
    setRatingInput('')
    setPlacementInput('')
  };

  return (
    <>
      <form className="mt-5" onSubmit={onSubmitHandler}>
        {/* Course input */}
        <div className="form-outline mb-4">
          <input
            type="text"
            id="courseNameInput"
            className="form-control"
            value={courseNameInput}
            onChange={(event) => setCourseName(event.target.value)}
          />
          <label className="form-label" htmlFor="courseNameInput">
            Course Name
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="number"
            id="placementInput"
            className="form-control"
            value={placementInput}
            onChange={(event) => setPlacementInput(event.target.value)}
          />
          <label htmlFor="placementInput">Placement Rate</label>
        </div>
        <div className="form-outline mb-4">
          <Rating
            name="simple-controlled"
            value={ratingInput}
            onChange={(event) => setRatingInput(event.target.value)}
          />
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block">
          Add Course
        </button>
      </form>
    </>
  );
}

export default AddCourse;
