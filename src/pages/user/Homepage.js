import React from "react";
import ProjectDetails from "../../components/user/projects-details/ProjectDetails";
import RecommendedProjects from "../../components/user/projects/RecommendedProjects";
import UserTemplate from "../../templates/UserTemplate";

const Homepage = () => {
  return (
    <UserTemplate>
      <RecommendedProjects />
    </UserTemplate>
  );
};

export default Homepage;
