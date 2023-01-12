import React from "react";
import AuthorCourseCarousel from "../components/authorHomepage/authorCourseCarousel";
import AuthorFooter from "../components/authorHomepage/authorFooter";
import AuthorNavbar from "../components/authorHomepage/authorNavbar";
import AuthorTrendingCourse from "../components/authorHomepage/authorTrendingCourse";
import WelcomeAuthor from "../components/authorHomepage/welcomeAuthor";

function AuthorHomepage() {
  return (
    <div>
      <AuthorNavbar />
      <WelcomeAuthor />
      <AuthorCourseCarousel />
      <AuthorTrendingCourse />
      <AuthorFooter />
    </div>
  );
}

export default AuthorHomepage;
