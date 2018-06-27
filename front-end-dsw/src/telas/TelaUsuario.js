import React, { Component } from 'react';
import {Button, Table} from 'reactstrap';
import UserProfile from "./Usuario";

class TelaUsuario extends Component{

    constructor(props){
        super();
        this.state = {
            listaPedidos: []
        }
    }

    componentWillMount(){
        if (UserProfile.getCpf() !== "") {
            fetch('http://localhost:8080/API_REST_DSW/webresources/' + UserProfile.getCpf() + '/Pedido')
                .then(res => res.json())
                .then((Pedido) => {
                    this.setState({listaPedidos : Pedido});
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    criaRow(pedido, nomeCliente, valorTotal, entregue){
        return <tr>
            <td>{pedido}</td>
            <td>{nomeCliente}</td>
            <td>{valorTotal}</td>
            <td>{entregue}</td>
        </tr>
    }

    criaRowsPedidos(){
        let rows = [];

        for (let i = 0; i < this.state.listaPedidos.length; i++){
            let nomeCliente = "";
            let entregue = "Não";
            if (this.state.listaPedidos[i].cliente){
                nomeCliente = this.state.listaPedidos[i].cliente.nome;
            }
            if (this.state.listaPedidos[i].entregue === true){
                entregue = "Sim";
            }
            rows[i] = this.criaRow(this.state.listaPedidos[i].ID,
                nomeCliente,
                "R$" + this.state.listaPedidos[i].valorTotal,
                entregue,
                i);
        }

        return rows;
    }
    render(){
        return <div>
            <h3>Pedidos do cliente {UserProfile.getCpf()}</h3>
            <Table hover>
                <thead>
                <tr>
                    <th>Pedido</th>
                    <th>Nome Cliente</th>
                    <th>Valor total</th>
                    <th>Entregue</th>
                </tr>
                </thead>
                <tbody>
                {this.criaRowsPedidos()}
                </tbody>
            </Table>
        </div>

    }
}

export default TelaUsuario;