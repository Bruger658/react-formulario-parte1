import { useState } from "react"


const Formulario = () => {

    const [todo, setTodo] = useState({
        // son los name de los input
        todoName:'',
        todoDescripcion:'',
        todoEstado:'pendiente',
        todoCheck: false,
    })

    // para los errores
    const [error, setError] = useState(false)

    // handleSubmit procesa el formulario
    const handleSubmit = (e) => {
        e.preventDefault()

        const { todoName, todoDescripcion } = todo

        if (!todoDescripcion.trim() || !todoName.trim()) {
            setError(true)
            return
        }
        setError(false)
        console.log(todo);

    }

    const handleChange = (e) => {
        //console.log(e.target.value);
        //console.log(e.target.name)

        // le pasamos en el objeto y la copia del todo(...todo)
        //setTodo({
            //...todo,
            // al tener puntos hay que ponerlo entre corchetes
            // nombre de la propiedad y el valor
            // cambia por el checkbox ya que no tiene value
            //[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        //})

        //const handleChange = (e) => {
            const { name, value, checked, type } = e.target
            setTodo({
                ...todo,
                [name]: type === 'checkbox' ? checked : value,
            })
        }
        
        //setTodo((old) =>({
            //...old,
            //[e.target.name]: e.target.value
        //}))
    //}

    // estamos creando un componente siempre empieza con mayuscula
    const PintarError = () => {
        <div className="alert alert-danger">Campos obligatorios</div>
    }

        return (            
            <>
                <f2>Controlado</f2>

                {
                    error &&  <PintarError />  
                }

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder='Ingrese Todo'
                        name="todoName"
                        className="form-control mb-2"
                        // onChange recibe una funcion
                        onChange={handleChange}
                        value={todo.todoName}
                    ></input>

                    <textarea
                        name="todoDescripcion"
                        className="form-control mb-2"
                        placeholder="Descripcion del todo"
                        // trae todo los datos de descripcion viejo y si hay algo nuevo pisalo 
                        onChange={handleChange}
                        value={todo.todoDescripcion}                  
                    />

                    <select 
                        className='form-control mb-2'
                        name="todoEstado"
                        onChange={handleChange}
                        value={todo.todoEstado}                   
                    >
                        <option value="pendiente">Pendiente</option>
                        <option value="completado">Completada</option>
                    </select>

                    <div className="form-check">
                        <input 
                        id="flexCheckDefault"
                        className="form-check-input" 
                        type="checkbox" 
                        name="todoCheck"
                        // no se usa value
                        checked={todo.todoCheck} 
                        onChange={handleChange}
                        

                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Dar prioridad
                        </label>
                    </div>

                    <button className="btn btn-primary" type="submit">Agregar</button>
                </form>
            </>
        )
   
}

export default Formulario
