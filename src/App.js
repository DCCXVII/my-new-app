import React, { StrictMode } from "react";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header.js";
import CourseCard from "./CourseCard.js";
import "./Style.css";
import AddCourse from "./AddCourse.js";
import Footer from "./Footer.js";
import CreatingCourse from "./CreatingCourse.js";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <div className="course-container">
          <AddCourse />
          <div className="course-card-title">My courses</div>
          <div className="course-card-grid">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
          
        </div> */}
        <CreatingCourse/>
      <Footer />
    </div>
  );
};

export default App;
