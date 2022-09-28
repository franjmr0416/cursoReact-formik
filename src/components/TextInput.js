import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  console.log({ field, meta });
  return (
    <div className="estilosControl">
      <label className="estilosLabel">{label}</label>
      <input className="estilosInput" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="estilosError">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default TextInput;
