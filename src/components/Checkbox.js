import { useField } from "formik";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  //console.log(field);
  return (
    <div className="col-10 d-flex justify-content-center mb-3 form-check text-center">
      <input
        className="form-check-input"
        type="checkbox"
        {...field}
        {...props}
      />
      <label className="form-check-label px-2">{children}</label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};
export default Checkbox;
