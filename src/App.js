import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from './components/Formulario';
import { calculoTotal } from './helper';
import Resultado from './components/Resultado';
import Mensaje from './components/Mensaje';
import Spinner from './components/Spinner';

class App extends Component {

  state = {
    total: '',
    cantidad: '',
    plazo: '',
    cargando: false
  }

  datosPrestamo = (cantidad, plazo) => {
    const total = calculoTotal(cantidad, plazo);

    // Resultado al state junto a la cantidad y el plazo
    this.setState({
      cargando: true
    }, () => {
      setTimeout( () => {
        this.setState({
          total,
          cantidad,
          plazo,
          cargando: false
        })
      }, 1000);
    });
  }

  render() {

    const {total, plazo, cantidad, cargando} = this.state;

    // Cargar componente condicionalmente
    let componente;

    if (total === '' && !cargando) {
      componente = <Mensaje />
    } else if (cargando === true) {
      componente = <Spinner />
    } else {
      componente = 
        <Resultado
          total={total}
          plazo={plazo}
          cantidad={cantidad}
        />
    }

    return (
      <Fragment>
        <h1>Cotizador de Prestamos</h1>
          <div className='container'>
            <Formulario 
              datosPrestamo={this.datosPrestamo}
            />

            <div className="mensajes">
              {componente}
            </div>

          </div>
      </Fragment>
    );
  }
}

export default App; 
