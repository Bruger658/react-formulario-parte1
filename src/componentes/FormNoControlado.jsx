import { useRef } from 'react'


const FormNoControlado = () => {

  // esto es para poder tomar los datos del formularios, es un HOOK
  const formulario = useRef(null);

  // cuando hace click en el boton con el onsubmit entra en funcion la funcion
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("procesando..");

    // traer todos los datos que nos envia formulario despues de cliquear el agregar - current viene de react
    const datos = new FormData(formulario.current);

    // entries trae la clave y valor listo para usar - nos devuelve un objeto con la clave valor
    const objetoDatos = Object.fromEntries([...datos.entries()])
    console.log(objetoDatos);

    // destructuracion  del objeto de los datos que vienen en objetoDatos
    const { todoDescripcion, todoName } = objetoDatos

    // validaciones
    if (!todoDescripcion.trim() || !todoName.trim()) {
      console.log("esta vacio"); 
      return     
    }
    console.log("paso la validaciones");
    
  }

  return (
    <>
      <f2>No controlado</f2>
      <form ref={formulario} onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder='Ingrese Todo'
            name="todoName"
            className="form-control mb-2"
            defaultValue="Tarea #01"
          ></input>

          <textarea
            name="todoDescripcion"
            className="form-control mb-2"
            placeholder="Descripcion del todo"
            defaultValue="Descripcion Tarea #01"
          />

          <select 
          className='form-control mb-2'
            name="todoEstado"             
            defaultValue="pendiente"           
          >
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completada</option>
          </select>

          <button className="btn btn-primary" type="submit">Agregar</button>
      </form>
    </>
  )
}

export default FormNoControlado
