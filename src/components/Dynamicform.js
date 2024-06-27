// components/AdvancedForm.js

import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";
import CustomSelect from "./CustomSelect";


const onSubmit = async (values, actions) => {
  console.log(values)
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = ({ fields ,validate }) => {
  const initialValues = {};


  fields.forEach((field) => {
    initialValues[field.name] = "";
 
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          {fields.map((field, index) => {
            switch (field.type) {
              case "text":
              case "email":
              case "password":
                return (
                  <CustomInput
                    key={index}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    placeholder={
                      field.placeholder ||
                      `Enter your ${field.label.toLowerCase()}`
                    }
                  />
                );
              case "select":
                return (
                  <CustomSelect
                    key={index}
                    label={field.label}
                    name={field.name}
                    placeholder={
                      field.placeholder ||
                      `Please select ${field.label.toLowerCase()}`
                    }
                  >
                    {field.options.map((option, optIndex) => (
                      <option key={optIndex} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </CustomSelect>
                );
              case "checkbox":
                return (
                  <CustomCheckbox
                    key={index}
                    type="checkbox"
                    name={field.name}
                    label={field.label}
                  />
                );
              default:
                return null;
            }
          })}
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedForm;
