import { Field, Form, Formik } from "formik";
import React from "react";

const App = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const handleSubmit = (arg) => {
    console.log(arg);
  };

  return (
    <div style={{ width: "20%" }}>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        {() => (
          <>
            <Form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <label htmlFor="email">Email</label>
              <Field type={"email"} name="email" id="email" />
              <label htmlFor="password">Password</label>
              <Field type={"password"} name="password" id="password" />
              <button>Submit</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default App;
