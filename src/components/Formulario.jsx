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
          placeholder="Nombre"
          value={newColab.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={newColab.correo}
          onChange={handleChange}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={newColab.edad}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cargo"
          placeholder="Cargo"
          value={newColab.cargo}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Telefono"
          value={newColab.telefono}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>
      <ConfirmarFormulario errorMessage={errorMessage} successMessage={successMessage} />
    </div>
  )
}

export default FormularioAddColab