import React, {Fragment,useState,useEffect} from 'react';
import axios from 'axios';
import Formulario from './Componentes/Formulario';
import Cancion from './Componentes/Cancion';
import Info from './Componentes/Info';


function App() {
  //Definir el state
  const [busquedaletra, setBusquedaLetra] = useState({});
  const [letras, setLetra] = useState('');
  const [info, setInfo] = useState({});
    useEffect(() => {
    //forma para saber sin un objecto esta vacio
    if(Object.keys(busquedaletra).length === 0 ) return;
    //forma para saber sin un objecto esta vacio

    const consultaApiLetra = async () => {

      const {artista, cancion} = busquedaletra;
      const Url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const Url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(Url),
        axios(Url2)
      ]);

      setLetra(letra.data.lyrics);
      setInfo(informacion.data.artists[0]);

      

      // setLetra(resultado.data.lyrics);


    }
    consultaApiLetra();
  }, [busquedaletra,info]);
  return (
    <Fragment>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
      
      />
      <div className = "container mt-5">
        <div className = " row">
          <div className = " col-md-6">
            <Info 
             info ={info}
            
            />
            

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
