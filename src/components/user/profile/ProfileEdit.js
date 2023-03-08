import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileEditPasswordForm from "./ProfileEditPasswordForm";
import ProfileEditProfileForm from "./ProfileEditProfileForm";

const ProfileEdit = () => {


  return (
    <Container>
      <Row className="g-5">
        <Col lg={5}>
          <h3>Update Profile</h3>
          <ProfileEditProfileForm />
        </Col>
        <Col lg={5}>
          <h3>Update Password</h3>
          <ProfileEditPasswordForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileEdit;
