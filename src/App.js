import React, {Fragment,useState,useEffect} from 'react';
import axios from 'axios';
import Formulario from './Componentes/Formulario';
import Cancion from './Componentes/Cancion';


function App() {
  //Definir el state
  const [busquedaletra, setBusquedaLetra] = useState({});
  const [letras, setLetra] = useState('');
  useEffect(() => {
    //forma para saber sin un objecto esta vacio
    if(Object.keys(busquedaletra).length === 0 ) return;
    //forma para saber sin un objecto esta vacio

    const consultaApiLetra = async () => {

      const {artista, cancion} = busquedaletra;
      const Url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado =  await axios(Url);

      setLetra(resultado.data.lyrics);


    }
    consultaApiLetra();
  }, [busquedaletra]);
  return (
    <Fragment>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
      
      />
      <div className = "container mt-5">
        <div className = " row">
          <div className = " col-md-6">
            

          </div>
          <div className = " col-md-6">
            <Cancion 
            letras={letras}
            
            />

          </div>
        </div>

      </div>
    </Fragment>
   
  );
}

export default App;
