import React ,{useState} from 'react';


 const Formulario = ({setBusquedaLetra}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, setError] =  useState(false);

    const {artista, cancion} = busqueda;
    


    //funcion a cada ipunt para leer contenido
    const actualizarstate = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }
    //consultar la api
    const buscarinformacion = e => {
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true);
            return;

        }
        setError(false);
        //Todos bien pasa al componente principal
        setBusquedaLetra(busqueda)
    }

     return ( 
        <div className = "bg-info">
            {error ? <p className = "alert alert-danger text-center p-2">Todos los campos son obligatorio</p> : null}
            <div className = "container">
                <div className = "row">
                    
                    <form
                       onSubmit={buscarinformacion}
                       className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones </legend>


                            <div className = "row">
                                <div className="col-md-6">
                                    <div className = "form-group">
                                        <label>Astista</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="artista"
                                          placeholder="Nombre Artista"
                                          onChange={actualizarstate}
                                          value={artista}
                                        />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className = "form-group">
                                        <label>Cancion</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="cancion"
                                          placeholder="Nombre Cancion"
                                          onChange={actualizarstate}
                                          value={cancion}

                                        />

                                    </div>
                                </div>

                            </div>
                            <button
                               type="submit"
                               className="btn btn-primary float-right"
                             >
                                 Buscar

                            </button>
                        </fieldset>

                    </form>

                </div>
            </div>
        </div>
      );
 }
  
 export default Formulario;