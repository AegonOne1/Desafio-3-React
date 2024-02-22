import { useState } from 'react';
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
    <div>
      <h1>Lista de Colaboradores</h1>
      <FiltroBusqueda colaboradores={colab} setColaboradores={setColabFiltrados} />
      <TableList colaboradores={colabFiltrados} />
      <h2>Agregar Colaborador</h2>
      <FormularioAddColab onAddColab={addColab} />
    </div>
  );
}

export default App;