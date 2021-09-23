import React, {Fragment,useState,useEffect} from 'react';
import axios from 'axios';
import Formulario from './Componentes/Formulario';


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
    </Fragment>
   
  );
}

export default App;
