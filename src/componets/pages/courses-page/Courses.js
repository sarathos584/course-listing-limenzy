import React, { useContext, useState, useEffect, useMemo } from "react";
import { CourseDataContext } from "../CourseDataContext";
import AddCourse from "../AddCourse";
import { Rating } from "@mui/material";

function Courses() {
  useEffect(() => {
    setCourses(courses);
  }, []);
  const [filterOption, setFilterOption] = useState("");
  const { courses, setCourses } = useContext(CourseDataContext);

  console.log(courses + "form course");

  const onSelectChangeHandler = (event) => {
    setFilterOption(event.target.value);
    console.log(filterOption);
  };

  const onSubmitHandler = (event) => {
    if (!filterOption) {
      return courses;
    }

    console.log(filterOption);
    console.log(courses);
    return courses.filter((course) => course.rating == filterOption);
  };
  const courseToList = useMemo(onSubmitHandler, [filterOption, courses]);
  const onDeleteHandler = (courseKey)=>{
  //  console.log(courseKey) 
  setCourses(courses.filter(course=>course.id!==courseKey))
  }

  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div>
            <select
              onChange={onSelectChangeHandler}
              className="select"
              value={filterOption}
              id="selectBtn"
            >
              <option value="">All</option>
              <option value="1">Rating 1</option>
              <option value="2">Rating 2</option>
              <option value="3">Rating 3</option>
              <option value="4">Rating 4</option>
              <option value="5">Rating 5</option>
            </select>
          </div>
          {courseToList.map((item) => {
            return (
              <>
                <div key={item.id} className="card flex-row align-items-center justify-content-between">
                  <div>
                  <h1>{item.courseName}</h1>
                  </div>
                  <div>
                    <button>Edit</button>
                    <button onClick={()=>onDeleteHandler(item.id)}>Delete</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <section className="container-fluid">
        <div className="container">
          <AddCourse onAddFilter={onSubmitHandler} />
        </div>
      </section>
    </>
  );
}

export default Courses;
