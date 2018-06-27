import React, { Component } from 'react';
import {Button, Table} from 'reactstrap';
import UserProfile from "./Usuario";

class TelaUsuario extends Component{

    criaRowsPedidos(){

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
                    <th></th>
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