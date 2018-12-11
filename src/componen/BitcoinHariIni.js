import React, { Component } from 'react';
import axios from 'axios';

class BitcoinHariIni extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        var url = 'https://blockchain.info/ticker'
        axios.get(url)
            .then((x) => {
                console.log(x.data.USD);
                this.setState({
                    jualUSD: x.data.USD.sell,
                    beliUSD: x.data.USD.buy,
                    jualAUD: x.data.AUD.sell,
                    beliAUD: x.data.AUD.buy,
                    jualEUR: x.data.EUR.sell,
                    beliEUR: x.data.EUR.buy,
                    jualGBP: x.data.GBP.sell,
                    beliGBP: x.data.GBP.buy,
                    jualJPY: x.data.GBP.sell,
                    beliJPY: x.data.GBP.buy,
                })
            })
    }

    render() {
        return (
            <div>
               <div>
                <center>
                    <h1>Harga Bitcoin Hari Ini</h1>
                    <br/>
                    <table className="table table-bordered table-striped text-center w-50">
                        <thead class="table-danger">
                            <tr>
                                <th>Mata Uang</th>
                                <th>Harga Beli Bitcoin</th>
                                <th>Harga Jual Bitcoin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Dollar Australia</b></td>
                                <td>{this.state.beliAUD}</td>
                                <td>{this.state.jualAUD}</td>
                            </tr>
                            <tr>
                                <td><b>Euro Eropa</b></td>
                                <td>{this.state.beliEUR}</td>
                                <td>{this.state.jualEUR}</td>
                            </tr>
                            <tr>
                                <td><b>Pondsterling Inggris</b></td>
                                <td>{this.state.beliGBP}</td>
                                <td>{this.state.jualGBP}</td>
                            </tr>
                            <tr>
                                <td><b>Yen Jepang</b></td>
                                <td>{this.state.beliJPY}</td>
                                <td>{this.state.jualJPY}</td>
                            </tr>
                            <tr>
                                <td><b>Dollar America</b></td>
                                <td>{this.state.beliUSD}</td>
                                <td>{this.state.jualUSD}</td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        </div>
        )
    }
}
export default BitcoinHariIni;