import { useField } from "formik";
import ErrorComp from "./Error";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of service</span>
      </div>

      {meta.touched && meta.error && <ErrorComp touched={meta.touched} error={meta.error}/>}
    </>
  );
};
export default CustomCheckbox;
