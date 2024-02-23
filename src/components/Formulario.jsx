import { useState } from "react"
import ConfirmarFormulario from "./Alert"

const FormularioAddColab = ({ onAddColab }) => {
  const [newColab, setNewColab] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  })

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewColab((prevColaborador) => ({
      ...prevColaborador,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      newColab.nombre &&
      newColab.correo &&
      newColab.edad &&
      newColab.cargo &&
      newColab.telefono
    ) {
      onAddColab(newColab)
      setNewColab({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setSuccessMessage("!Registro Exitoso!")
      setErrorMessage("")
    } else {
      setSuccessMessage("")
      setErrorMessage("Completa los campos!")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del Colaborador"
          className="inputsClass"
          value={newColab.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo del Colaborador"
          className="inputsClass"
          value={newColab.correo}
          onChange={handleChange}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad del Colaborador"
          className="inputsClass"
          value={newColab.edad}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cargo"
          placeholder="Cargo del Colaborador"
          className="inputsClass"
          value={newColab.cargo}
          onChange={handleChange}
        />
        <input
          type="number"
          name="telefono"
          placeholder="Telefono del Colaborador"
          className="inputsClass"
          value={newColab.telefono}
          onChange={handleChange}
        />
        <button 
        type="submit"
        className="buttonClass">
        Agregar Colaborador
        </button>
      </form>
      <ConfirmarFormulario 
      className='centradoAlerta' 
      errorMessage={errorMessage} 
      successMessage={successMessage} 
      />
    </div>
  )
}

export default FormularioAddColab