import React, { Component } from 'react';
import axios from 'axios';

class KonversiRupiah extends Component {
    constructor() {
      super();
      this.state = {
        userinput: '',
        konversiBitcoin: 'Silahkan Input Dulu Nilai Bitcoin',
        konversiRupiah: 'Silahkan Input Dulu Nilai Rupiah', 
      }
    }
    
    konversiRupiah(rupiah) {

        var url = 'https://blockchain.info/tobtc?currency=USD&value=' + (rupiah / 14000)
        axios.get(url)
          .then((x) => {
            console.log(x.data);
            this.setState({    
              konversiRupiah: 'Rp. ' + rupiah + ' = BTC ' + x.data    
            })
          })    
      }

    render() {
     
        return (
          <center>
            <div class="card w-50" >
              <div class="card-header bg-success">
                <h2>Konversi Rupiah ke Bitcoin </h2>
                <h4>Kurs 1 USD = 14.000 IDR</h4>
              </div>
              <div class="card-body">
                <input type="number" placeholder="Input nilai Rupiah" onChange={(nilai) => this.setState({ userinput: nilai.target.value }, this.konversiRupiah(nilai.target.value))} />
              </div>
              <div class="card-header">
                <h4>{this.state.konversiRupiah}</h4>
              </div>
            </div>
          </center>
        )
    }
}
export default KonversiRupiah;