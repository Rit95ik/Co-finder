import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField, Google } from "./TextField";
import * as Yup from "yup";
import styled from "styled-components";

// Create a styled component
const H1 = styled.h1`
  font-weight: 700;
  color: black;
  font-size: 1.775rem;
`;

const Div = styled.div`
  color: black;
  font-size: 1rem;
`;

const Button = styled.button`
  border-radius: 0.4rem;
  font-size: 0.9rem;
`;

export const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  return (
    <Div className="container mt-3">
      <div className="row">
        <div className="col-md-4">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log("Submitting form with values:", values);

              // Log the payload before the fetch
              console.log("Payload:", JSON.stringify(values));

              fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("Response data:", data);
                  const userId = data.user._id;
                  console.log("User ID:", userId);
                })
                .catch((error) => {
                  console.error("Error sending data to backend:", error);
                });
            }}
          >
            {(formik) => (
              <div style={{ marginTop: "3.5rem" }}>
                <img style={{ width: "200px" }} src="./img/co-finder.png" />
                <H1 className="my-4 .display-4">Sign into your account</H1>
                <p>
                  Or{" "}
                  <a class="text-blue-600 hover:text-blue-500" href="/Signup">
                    click here to create{" "}
                  </a>{" "}
                  a free account
                </p>

                <Form onSubmit={formik.handleSubmit}>
                  <TextField
                    style={{ marginBottom: "1rem" }}
                    label="Email"
                    name="email"
                    type="email"
                  />
                  <TextField label="password" name="password" type="password" />

                  <Button
                    className="btn btn-primary mt-3"
                    style={{ width: "9rem" }}
                    type="submit"
                  >
                    Login
                  </Button>
                  <Button className="btn btn-danger mt-3 ml-3" type="reset">
                    Reset
                  </Button>
                  <Google />
                </Form>
              </div>
            )}
          </Formik>
        </div>
        <div className="col-md-8 my-auto">
          <img
            className="img-fluid w-100"
            style={{ marginLeft: "1rem", marginTop: "5rem" }}
            src="https://cdn.pixabay.com/photo/2017/11/30/09/03/tree-2987962_1280.jpg"
            alt=""
          />
        </div>
      </div>
    </Div>
  );
};
