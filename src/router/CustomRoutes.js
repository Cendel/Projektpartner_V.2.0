import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/common/scroll-to-top/ScrollToTop";
import AdminContactMessageEditPage from "../pages/admin/AdminContactMessageEditPage";
import AdminContactMessagesPage from "../pages/admin/AdminContactMessagesPage";
import AdminProjectsPage from "../pages/admin/AdminProjectsPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";
import AuthPage from "../pages/common/AuthPage";
import NotFoundPage from "../pages/common/NotFoundPage";
import UnauthorizedPage from "../pages/common/UnauthorizedPage";
import AboutPage from "../pages/user/AboutPage";
import ContactPage from "../pages/user/ContactPage";
import Homepage from "../pages/user/Homepage";
import PrivacyPolicyPage from "../pages/user/PrivacyPolicyPage";
import ProfilePage from "../pages/user/ProfilePage";
import ProjectDetailsPage from "../pages/user/ProjectDetailsPage";
import ProjectEditPage from "../pages/user/ProjectEditPage";
import ProjectFormPage from "../pages/user/ProjectFormPage";
import ProjectsPage from "../pages/user/ProjectsPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="project-form" element={<ProjectFormPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="unauthorized" element={<UnauthorizedPage />} />
          <Route path="projects">
            <Route index element={<ProjectsPage />} />
            <Route path=":projectId" element={<ProjectDetailsPage />} />
          </Route>
          <Route path="project-edit/:projectId" element={<ProjectEditPage />} />
          <Route path="profile/:userId" element={<ProfilePage />} />
          <Route path="admin-projects" element={<AdminProjectsPage />} />
          <Route path="admin-users" element={<AdminUsersPage />} />
          <Route path="admin-messages">
            <Route index element={<AdminContactMessagesPage />} />
            <Route
              path=":messageId"
              element={<AdminContactMessageEditPage />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
