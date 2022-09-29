import { useField } from "formik";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select className="form-select" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};
export default Select;
