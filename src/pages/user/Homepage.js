import React from "react";
import ProjectDetails from "../../components/user/projects-details/ProjectDetails";
import UserTemplate from "../../templates/UserTemplate";

const Homepage = () => {
  return (
    <UserTemplate>
      <ProjectDetails />
    </UserTemplate>
  );
};

export default Homepage;
