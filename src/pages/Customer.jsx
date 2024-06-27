import React from 'react';
import { CustomerScema } from '../schemas';
import AdvancedForm from '../components/Dynamicform';

const Customer = () => {
    const fields = [
        {
            type: "text",
            label: "First Name",
            name: "firstName",
            placeholder: "Enter your first name"
        },
        {
            type: "text",
            label: "Last Name",
            name: "lastName",
            placeholder: "Enter your last name"
        },
        {
            type: "email",
            label: "Email",
            name: "email",
            placeholder: "Enter your email address"
        },
        {
            type: "text",
            label: "Phone Number",
            name: "phoneNumber",
            placeholder: "Enter your phone number"
        },
        {
            type: "text",
            label: "Date of Birth",
            name: "dob",
            placeholder: "Select your date of birth"
        },
        {
            type: "select",
            label: "Gender",
            name: "gender",
            options: [
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" }
            ]
        },
        {
            type: "checkbox",
            label: "Subscribe to Newsletter",
            name: "subscribeNewsletter"
        }
    ];

    return (
        <AdvancedForm validate={CustomerScema} fields={fields}/>
    );
}

export default Customer;
