import React from 'react';
import './format.css';

class Format extends React.Component {
  state = {
      city: "Guasave",
      fecha: "24/12/19",
      product: "condones ",
      cost: "10",
      tel: "6871282885",
      use: "fausto",
      cant: "1",
      pre: "20",
      imp: "20"


  }
  render() {
    const {city, fecha, product, cost, use, tel, cant, pre, imp } = this.state;
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

                  <div className="megdev">
                    <td className="" >Art:  {product} </td>


                    <section>
                      <div class="CPI">{cant}</div>
                      <div class="CPI">{pre}</div>
                      <div class="CPI">{imp}</div>
                    </section>
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
