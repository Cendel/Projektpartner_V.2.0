import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/common/AuthPage";
import NotFoundPage from "../pages/common/NotFoundPage";
import UnauthorizedPage from "../pages/common/UnauthorizedPage";
import AboutPage from "../pages/user/AboutPage";
import ContactPage from "../pages/user/ContactPage";
import Homepage from "../pages/user/Homepage";
import PrivacyPolicyPage from "../pages/user/PrivacyPolicyPage";
import ProjectDetailsPage from "../pages/user/ProjectDetailsPage";
import ProjectsPage from "../pages/user/ProjectsPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="unauthorized" element={<UnauthorizedPage />} />
          <Route path="projects">
            <Route index element={<ProjectsPage />} />
            <Route path=":pojectId" element={<ProjectDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
