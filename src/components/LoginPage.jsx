import React from "react";
import { Container } from "react-bootstrap";
import SignIn from "./SignIn";
import { AuthProvider } from "../contexts/AuthLogic";
export default function LoginPage() {
  return (
    <AuthProvider>
      <Container
        className="mt-5 d-flex align-items-center justify-content-end"
        style={{ minHeight: "85vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <SignIn />
        </div>
      </Container>
    </AuthProvider>
  );
}
