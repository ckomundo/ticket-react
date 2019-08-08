import React from 'react';
import ReactToPrint from 'react-to-print';
import Format from './componentes/formato';

class App extends React.Component {
  state = {
      city: "",
      fecha: "0",
      product: "",
      cost: "0",
      tel: "0",
      use: ""
  }
handlePrint = (state) => {
  console.log(this.state);
  event.preventDefault();
}


handleState = (e) => {
  const {name, value} = e.target;

    this.setState(() => {
      return { [name]: value };
    });
  };


render() {
  console.log(this.state);
  return(
    <div>
      <form onSubmit={this.handlePrint}>

        <label>Nombre</label>
        <input
          name="name"
          type="text"
          placeholder="ingresa tu nombre"
          onChange={this.handleState}
          />
          <label>Precio</label>
          <input
            name="price"
            type="number"
            placeholder="ingresa tu nombre"
            onChange={this.handleState}
            />
          <div>
            <label>pago</label>
            <input
              name="payment"
              type="number"
              placeholder="ingresa tu nombre"
              onChange={this.handleState}
              />
            </div>
            <div>
              <label>tienda</label>
              <input
                name="store"
                type="text"
                placeholder="ingresa tu nombre"
                onChange={this.handleState}
                />
              </div>
              <div>
                <label>ciudad</label>
                <input
                  name="city"
                  type="text"
                  placeholder="ingresa tu nombre"
                  onChange={this.handleState}
                  />
                </div>

         <input type="submit" value="Submit" />


      </form>

    </div>
  )
 }
};

class Example extends React.Component {


  render() {
    return (
      <div>

      <App  />
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Format ref={el => (this.componentRef = el)} />


      </div>
    );
  }
}
export default Example;
