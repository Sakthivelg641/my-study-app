import React from "react";
import LearnerCourseCarousel from "../components/learnerHomePage/learnerCourseCarousel";
import LearnerCourseTabs from "../components/learnerHomePage/learnerCourseTabs";
import LearnerFooter from "../components/learnerHomePage/learnerFooter";
import LearnerNavbar from "../components/learnerHomePage/learnerNavbar";
import WelcomeLearner from "../components/learnerHomePage/welcomeLearner";
function LearnerHomepage() {
  return (
    <div>
      <LearnerNavbar />
      <WelcomeLearner />
      <LearnerCourseTabs />
      <LearnerCourseCarousel/>
      <LearnerFooter/>
    </div>
  );
}

export default LearnerHomepage;
