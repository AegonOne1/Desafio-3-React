import './App.css'
import { useState } from 'react'
import TableList from './components/Listado'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormularioAddColab from './components/Formulario'
import { BaseColaboradores } from './assets/BaseColaboradores'
import FiltroBusqueda from './components/Buscador'

function App() {
  const [colab, setColab] = useState(BaseColaboradores)
  const [colabFiltrados, setColabFiltrados] = useState(BaseColaboradores)

  const addColab = (newColab) => {
    setColab([...colab, newColab])
    setColabFiltrados([...colab, newColab])
  };

  return (
    <div className='container'>
      <div className='table'>
        <h1 className='titulo'>Lista de Colaboradores</h1>
        <FiltroBusqueda colaboradores={colab} setColaboradores={setColabFiltrados} />
        <TableList colaboradores={colabFiltrados} />
      </div>
      <div className='formulario'>
        <h2>Agregar Colaborador</h2>
        <FormularioAddColab onAddColab={addColab} />
      </div>
    </div>
  );
}

export default App;