// App.js


import AdvancedForm from "./components/AdvancedForm";
import "./App.css";
import {advancedSchema} from "./schemas/index"
function App() {

  const fields = [
    {
      type: "text",
      label: "Username",
      name: "username",
      placeholder: "Enter your username"
    },
    {
      type: "password",
      label: "Password",
      name: "password",
      placeholder: "Enter your Password"
    },
    {
      type: "select",
      label: "Job Type",
      name: "jobType",
      placeholder: "Please select a job",
      options: [
        { value: "", label: "Please select a job type" },
        { value: "jobber", label: "Jobber" },
        { value: "designer", label: "Designer" },
        { value: "manager", label: "Product Manager" },
        { value: "other", label: "Other" }
      ]
    },
    {
      type: "checkbox",
      label: "Accepted Terms of Service",
      name: "acceptedTos"
     
    }
   
  ];

  return (
    <div className="App">
      <nav>
        <h3>Form</h3>
      </nav>
      <AdvancedForm fields={fields} validate= {advancedSchema} />
    </div>
  );
}

export default App;
