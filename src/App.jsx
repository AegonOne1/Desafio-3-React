import './App.css'
import { useState } from 'react';
import TableList from './components/Listado'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioAddColab from './components/Formulario';


const App = () => {
  const [colab, setColab] = useState([])

  const addColab = (newColab) => {
    setColab([...colab, newColab])
  }

  return (
    <div>
      <h1>Lista de Colaboradores</h1>
      <TableList colaboradores={colab} />
      <h2>Agregar Colaborador</h2>
      <FormularioAddColab onAddColab={addColab} />
    </div>                    
  )
}

export default App
