import React from "react";
import ProjectForm from "../../components/user/ProjectForm/ProjectForm";
import { getCurrentDate } from "../../helpers/functions/date-time";
import UserTemplate from "../../templates/UserTemplate";

const ProjectFormPage = () => {
  const initialValues = {
    projectTitle: "",
    projectPlace: "",
    estimatedImplementationDate: "",
    slogan: "",
    about: "",
    goal: "",
    support: "",
    shortDesc: "",
    longDesc: "",
    projectImage: "",
    attachments: [],
    createdBy: "",
    createdDate: getCurrentDate(),
  };

  return (
    <UserTemplate>
      <ProjectForm {...initialValues} />
    </UserTemplate>
  );
};

export default ProjectFormPage;
