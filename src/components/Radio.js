import { useField } from "formik";

const Radio = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });
  return (
    <div className="mb-3 form-check col mx-3">
      <input className="form-check-input" type="radio" {...field} {...props} />
      <label className="form-check-label">{label}</label>
    </div>
  );
};
export default Radio;
