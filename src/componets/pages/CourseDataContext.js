import React,{ createContext, useState } from "react";

export const CourseDataContext = createContext()

export const CourseDataProvider = ({children})=>{
  const [reviews,setReviews] = useState([
    {id:1,reviwer:'Sarath',rating:4,courseName:'MERN stack',review:'The course they offer worth learning for future endevours'},
    {id:2,reviwer:'San T',rating:4,courseName:'MEAN stack',review:'This course from limenzy made me join as a fersher developer with a 10 LPA'},
    {id:3,reviwer:'Rimaz',rating:4,courseName:'Python Django',review:'Python has the power for many things that other languages usually does not offer, so this course was helpfull for my carrier kickstart as a software developer'},
    {id:4,reviwer:'Basil Jiji',rating:4,courseName:'Ruby Rails',review:'Even though Ruby is a comparitively newer language, there is a better future and career waiting for you'},
  ])
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
        <CourseDataContext.Provider value={{courses,setCourses,reviews,setReviews}}>
            {children}
        </CourseDataContext.Provider>
      )
}