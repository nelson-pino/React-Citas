import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
function App() {
  const [citas, guardarCitas] = useState([]);

  //funcion que tome las citas actuales y agrege la nueva.
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  return (
    <div className="App">
      <Fragment>
        <h1>Administrador de Pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario crearCita={crearCita} />
            </div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
