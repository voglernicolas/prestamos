import React, { Component } from 'react';

class Formulario extends Component {
    state = { 
        cantidad: '',
        plazo: ''
     }

    calcularPrestamo = (e) => {
        e.preventDefault();
        // Destructuring
        const { cantidad, plazo } = this.state;
        // Pasarlo a componente padre
        this.props.datosPrestamo(cantidad, plazo);
    }

    actualizarState = (e) => {

        const {name, value} = e.target;

        // Actualizar state
        this.setState({
            [name] : Number(value)
        })
        
    }

    habilitarSubmit = () => {
        // Destructuring
        const { cantidad, plazo } = this.state;
        // Leer variables
        const noValido = !cantidad || !plazo;

        return noValido;
        
    }

    render() {
        return ( 
            <form onSubmit={this.calcularPrestamo}>
                <div>
                    <label>Cantidad Prestamo:</label>
                    <input
                        onChange={this.actualizarState}
                        type="number" 
                        name='cantidad' 
                        className='u-full-width' 
                        placeholder='Ejemplo 3000' />
                </div>
                <div>
                    <label>Plazo para pagar:</label>

                    <select onChange={this.actualizarState} name='plazo' className='u-full-width'>
                        <option value="Seleccionar">Seleccionar</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>
                <div>
                    <input
                        disabled={this.habilitarSubmit()}
                        type="submit" 
                        value='Calcular' 
                        className='u-full-width button-primary' />
                </div>


            </form> );
    }
}
 
export default Formulario;