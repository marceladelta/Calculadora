import React, { Component } from 'react'; // alem de importar o react 
//importamos o component pois quando importamos um componente de classe herdamos o component do react
// usou o destructring para pegar o component
// podemos colocar também React.Component

//import ReactDom from 'react-dom';
import Calculator from './main/Calculator';
import './main/Calculator.css'; // não precisa referenciar o css
// Usaremos classe pois precisaremos de estado
export default class Calculator extends Component{ 
    render() {
        return (
            <div className="calculator"> 
       
            </div>
        )
    }
}

