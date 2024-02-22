import { useState } from "react"

const FiltroBusqueda = ({ colaboradores, setColaboradores }) => {
  const [busqueda, setBusqueda] = useState("")

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value)
    filtrarColaboradores(event.target.value)
  }

  const filtrarColaboradores = (terminoBusqueda) => {
    const colaboradoresFiltrados = colaboradores.filter((colab) =>
      Object.values(colab).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
    )
    setColaboradores(colaboradoresFiltrados);
  }

  const handleLimpiarBusqueda = () => {
    setBusqueda("")
    setColaboradores(colaboradores)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar Colaborador"
        value={busqueda}
        onChange={handleBusquedaChange}
      />
      <button onClick={handleLimpiarBusqueda}>Limpiar</button>
    </div>
  )
}

export default FiltroBusqueda