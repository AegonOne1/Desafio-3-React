import {useState} from "react"

const FormularioAddColab = ({ onAddColab }) => {
    const [newColab, setNewColab] = useState({
      id: "",
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setNewColab((prevColaborador) => ({
        ...prevColaborador,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (
        newColab.id &&
        newColab.nombre &&
        newColab.correo &&
        newColab.edad &&
        newColab.cargo &&
        newColab.telefono
      ) {
        onAddColab(newColab);
        setNewColab({
          id: "",
          nombre: "",
          correo: "",
          edad: "",
          cargo: "",
          telefono: "",
        });
      } else {
        alert("Por favor completa todos los campos.")
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={newColab.id}
          onChange={handleChange}
        />
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
          type="text"
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
          type="text"
          name="telefono"
          placeholder="Telefono"
          value={newColab.telefono}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>
    );
  };

export default FormularioAddColab