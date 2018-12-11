import React, { Component } from 'react';
import BitcoinHariIni from './componen/BitcoinHariIni';
import KonversiRupiah from './componen/KonversiRupiah';
import KonversiBcoin from './componen/KonversiBcoin';

class App extends Component {
  render() {
    return (
      <div>          
          <div class="">            
              <BitcoinHariIni />
              <KonversiRupiah />
              <KonversiBcoin />            
          </div>          
      </div>
    );
  }
}

export default App;
