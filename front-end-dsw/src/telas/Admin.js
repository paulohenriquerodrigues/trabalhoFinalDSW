import React from 'react';
import {Button, Table} from 'reactstrap';


class Admin extends React.Component {

    constructor() {
        super();
        this.state = {
            listaUsuarios: [],
            listaPedidos: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/API_REST_DSW/webresources/Usuario')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    listaUsuarios: res
                })
            })
            .catch(error => {
                console.log(error)
            });
        fetch('http://localhost:8080/API_REST_DSW/webresources/Pedido')
            .then(res => res.json())
            .then((Pedido) => {
                this.setState({listaPedidos : Pedido});
            })
            .catch(error => {
                console.log(error);
            })
    }

    clickConfirmarPedido(){
        let id = document.activeElement.id;
        if (this.state.listaPedidos[id]){
            this.state.listaPedidos[id].entregue = true;
        }
    }

    criaRow(pedido, nomeCliente, valorTotal, entregue, id){
        return <tr>
            <td>{pedido}</td>
            <td>{nomeCliente}</td>
            <td>{valorTotal}</td>
            <td>{entregue}</td>
            <td><Button id={id} onClick={this.clickConfirmarPedido().bind(this)}>Confirmar</Button></td>
        </tr>
    }

    criaRowsPedidos(){
        let rows = [];

        for (let i = 0; i < this.state.listaPedidos.length; i++){
            let nomeCliente = "";
            let entregue = "Não";
            if (this.state.listaPedidos[i].cliente){
                nomeCliente = this.stsate.listaPedidos[i].cliente.nome;
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

    render() {
        return (
            <div>
                <h2>Admin</h2>

                <h3>Clientes</h3>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Senha</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.listaUsuarios.map(function (e) {

                        return (<tr>
                            <td>{e.nomeCompleto}</td>
                            <td>{e.cpf}</td>
                            <td>{e.senha}</td>
                        </tr>)
                    })
                    }

                    </tbody>
                </Table>

                <h3>Pedidos</h3>
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
        )
    }
}
    export default Admin;