import { Formik, Form, ErrorMessage } from "formik";
import Checkbox from "./components/Checkbox";
import TextInput from "./components/TextInput";
import Select from "./components/Select";
import Radio from "./components/Radio";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Nombre requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }
  if (!values.lastname) {
    errors.lastname = "Apellido Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }
  if (!values.radio) {
    errors.radio = "Requerido radio";
  }

  return errors;
};

const App = () => {
  return (
    <div className="container mt-3">
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          color: "",
          radio: "",
        }}
        validate={validate}
        onSubmit={(values) => console.log(values)}
      >
        {
          <Form>
            <h1>React + Formik + Bootstrap</h1>
            <h3>Responsive form</h3>
            <div className="row">
              <TextInput name="name" label="Nombre" />
              <TextInput name="lastname" label="Apellido" />
            </div>
            <TextInput name="email" label="Correo" type="email" />
            <Select name="color" label="Color">
              <option value="">Seleccione color</option>
              <option value="rojo">Rojo</option>
              <option value="azul">Azul</option>
              <option value="amarillo">Amarillo</option>
            </Select>
            <div className="row">
              <Radio name="radio" value="madera" label="Madera" />
              <Radio name="radio" value="metal" label="Metal" />
              <Radio name="radio" value="cemento" label="Cemento" />
              <Radio name="radio" value="bamboo" label="Bamboo" />
              <Radio name="radio" value="teja" label="Teja" />
              <Radio name="radio" value="lamina" label="Lamina" />
            </div>
            <ErrorMessage name="radio" />
            <div className="row justify-content-center my-2">
              <Checkbox name="accept">Aceptar términos y condiciones</Checkbox>
            </div>
            <div class="d-grid col-xs-8 col-sm-4 col-md-2 mx-auto">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </Form>
        }
      </Formik>
    </div>
  );
};

export default App;
