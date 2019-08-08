import React from 'react';
import './format.css';

class Format extends React.Component {
  state = {
      city: "Guasave",
      fecha: "24/12/19",
      product: "condones ",
      cost: "10",
      tel: "6871282885",
      use: "fausto"
  }
  render() {
    const {city, fecha, product, cost, use, tel } = this.state;
    return(
      <div className="god">
           <header>
              <h3 className="center">Ticket de VENTA</h3>
           </header>
           <hr />

             <body>
                <div className="megdev">

                    <tb>megaSuper {city}</tb> <br />
                    <tb>Snatos Degollado Sin N-mero {city}</tb> <br />
                    <tb>{city}, Sinalo</tb> <br />
                    <tb>tel:{tel}</tb>

                </div>
                <hr />
                <div className="megdev">
                     <td>folio: 01  332290</td> <br />
                     <td>Fecha: {fecha}</td>
                </div>
                <hr />
                <div className="container">
                  <div className="content">
                    <td className="shit" >Art. </td>
                    <td className="derecha">|CANT|PRECIO|IMPORT</td>
                  </div>
                  <hr />
                  <div className="content">
                    <td className="shit">{product}</td>
                    <td className="derecha"> 1 ........{cost} .........{cost}</td>
                  </div>

                </div>
                  <hr />
                <div className="megdev">
                  <tr>
                    <tb>TOTAL..........</tb> <br />
                    <tb>Pago con.......</tb> <br />
                    <tb>Cambio.........</tb> <br />
                    <tb className="center">SON: Cantidad en texto 00/100 M.N.</tb>
                  </tr>
                </div>

               <hr />
               <div className="center">Atendido por : {use}</div>
             </body>

      </div>
    )
  }
}

export default Format;
