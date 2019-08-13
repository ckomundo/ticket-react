import React from "react";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

          city: "Guasave",
          fecha: "24/12/19",
          product: "condones ",
          cost: "10",
          tel: "6871282885",
          use: "fausto",
          cant: "1",
          pre: "20",
          imp: "20"


      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Ciudad:
          <input type="text" value={this.state.city} onChange={this.handleChange} />
        </label>
        <label>
          Fecha:
          <input type="date" value={this.state.fecha} onChange={this.handleChange} />
        </label>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}




export default App;
