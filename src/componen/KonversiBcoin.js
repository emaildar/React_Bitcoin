import React, { Component } from 'react';
import axios from 'axios';

class KonversiBcoin extends Component {
    constructor() {
        super();
        this.state = {
            userinput: '',
            konversiBitcoin: 'Input Nilai Bitcoin',
            konversiRupiah: 'Input Nilai Rupiah',
        }
    }

    konversiBitcoin(coinKali) {
        var url = 'https://blockchain.info/tobtc?currency=USD&value=' + (105564771*(coinKali*7540))
        axios.get(url)
            .then((nilaiBcoin) => {
                console.log(nilaiBcoin.data);
                this.setState({
                    konversiBitcoin: coinKali + ' BTC = Rp. ' + nilaiBcoin.data
                })
            })
    }

    render() {
        return (
            <div>
                <center>
                    <div class="card w-50" >
                        <div class="card-header bg-info">
                            <h2>Konversi Bitcoin ke Rupiah </h2>
                            <h4>Kurs 1 USD = 14.000 IDR</h4>
                        </div>
                        <div class="card-body">
                            <input type="number" placeholder="Input nilai BTC" onChange={(nilai) => this.setState({ userinput: nilai.target.value }, this.konversiBitcoin(nilai.target.value))} />
                        </div>
                        <div class="card-header">
                            <h4>{this.state.konversiBitcoin}</h4>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}
export default KonversiBcoin;