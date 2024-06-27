import React from 'react';
import { BuissnessSchema } from '../schemas';
import AdvancedForm from '../components/Dynamicform';

const Buissness = () => {
    const fields = [
        {
            type: "text",
            label: "Company Name",
            name: "companyName",
            placeholder: "Enter your company name"
        },
        {
            type: "email",
            label: "Business Email",
            name: "businessEmail",
            placeholder: "Enter your business email"
        },
        {
            type: "text",
            label: "Contact Person",
            name: "contactPerson",
            placeholder: "Enter contact person's name"
        },
        {
            type: "text",
            label: "Phone Number",
            name: "phoneNumber",
            placeholder: "Enter phone number"
        },
        {
            type: "select",
            label: "Industry",
            name: "industry",
            placeholder: "Select industry",
            options: [
                { value: "", label: "Select industry" },
                { value: "tech", label: "Technology" },
                { value: "finance", label: "Finance" },
                { value: "healthcare", label: "Healthcare" },
                { value: "manufacturing", label: "Manufacturing" },
                { value: "other", label: "Other" }
            ]
        },
       
    ];

    return (
        <AdvancedForm validate={BuissnessSchema} fields={fields}/>
    );
}

export default Buissness;
