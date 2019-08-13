import React from 'react';
import ReactToPrint from 'react-to-print';
import Format from './componentes/formato';
import App from './componentes/index';



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
