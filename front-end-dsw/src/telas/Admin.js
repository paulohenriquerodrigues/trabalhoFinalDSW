import React from 'react';
import {Table} from 'reactstrap';


class Admin extends React.Component {

    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:18397/API_REST_DSW/webresources/Usuario')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    lista: res
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h2>Admin</h2>

                <Table hover>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Senha</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.lista.map(function (e) {

                        return (<tr>
                            <td>{e.nomeCompleto}</td>
                            <td>{e.cpf}</td>
                            <td>{e.senha}</td>
                        </tr>)
                    })
                    }

                    </tbody>
                </Table>
            </div>
        )
    }
}
    export default Admin;