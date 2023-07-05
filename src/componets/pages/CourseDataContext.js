import React,{ createContext, useState } from "react";

export const CourseDataContext = createContext()

export const CourseDataProvider = ({children})=>{
    const [courses, setCourses] = useState([
        { id: 1, courseName: "Python Django", rating: 4, placementRate: "89%" },
        { id: 2, courseName: "Ruby on Rails", rating: 3, placementRate: "86%" },
        { id: 3, courseName: "MERN stack ", rating: 2, placementRate: "96%" },
        { id: 4, courseName: "MEAN stack ", rating: 2, placementRate: "92%" },
        { id: 5, courseName: "AI development", rating: 5, placementRate: "97%" },
        { id: 6, courseName: "Data Science", rating: 4, placementRate: "90%" },
        { id: 7, courseName: "Big Data Analysis", rating: 4, placementRate: "92%" },
        { id: 8, courseName: "Machine Learning", rating: 5, placementRate: "92%" },
      ]);
      return (
        <CourseDataContext.Provider value={{courses,setCourses}}>
            {children}
        </CourseDataContext.Provider>
      )
}