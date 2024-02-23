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



  return (
    <div >
      <input
        className="buscador"
        type="text"
        placeholder="Buscar un Colaborador"
        value={busqueda}
        onChange={handleBusquedaChange}
      />
    </div>
  )
}

export default FiltroBusqueda