import React, {Component} from 'react';
import {Col, Row, Container, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import userProfile from './Usuario.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Template from '../Template';
import Home from './Home';
import ReactDOM from 'react-dom';
import UserProfile from "./Usuario";

class Login extends React.Component {

    retornaUsuario() {
        let cpf = document.getElementById("cpf").value;
        let senha = document.getElementById("senha").value;
        fetch('http://localhost:8080/API_REST_DSW/webresources/Usuario/buscar?cpfUsuario="' + cpf + '"&senha="' + senha + '"')
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data) {
                    alert("Logado com Sucesso!");
                    userProfile.setCpf(cpf);
                    userProfile.setAdmin(data.administrador);
                    userProfile.setEmail(data.email);
                    userProfile.setNomeCompleto(data.nomeCompleto);

                    let endereco = "";

                    if (data.endereco) {
                        let rua = data.endereco.rua;
                        let bairro = data.endereco.bairro;
                        let cidade = data.endereco.cidade;
                        let estado = data.endereco.estado;
                        let pais = data.endereco.pais;
                        let num = data.endereco.numeroCasa;

                        endereco = rua + ", " + num + ", " + bairro + ", " + cidade + ", " + estado + ", " + pais;
                        UserProfile.setEndereco(endereco);
                    }

                    ReactDOM.render(<BrowserRouter>
                            <Template/>
                        </BrowserRouter>,
                        document.getElementById('root'))

                } else {
                    alert("CPF e/ou Senha Inválido(s)");

                }
            });
    }


    cadastraUsuario(){
     var usuario = new Object();
     usuario.cpf = document.getElementById('cpfCadastro').value;
     usuario.nomeCompleto = document.getElementById('nome').value;
     usuario.senha = document.getElementById('senhaCadastro').value;
     usuario.email = document.getElementById('email').value;
     usuario.administrador = document.getElementById('administrador').value;



        console.log(JSON.stringify(usuario));


    }


    componentWillMount() {
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{size: 'auto', offset: 1}}><h3>Login</h3>

                        <Input type="text" name="cpf" id="cpf" placeholder="cpf"/>
                        <br/>
                        <Input type="password" name="senha" id="senha" placeholder="Senha"/>
                        <br/>
                        <Button onClick={this.retornaUsuario.bind(this)} color="success">Login</Button>
                    </Col>

                    <Col sm={{size: '5', offset: 2}}><h3>Cadastre-se</h3>
                        <Input type="text" name="nome" id="nome" placeholder="Nome"/><br/>
                        <Input type="text" name="cpf" id="cpfCadastro" placeholder="CPF"/><br/>
                        <Input type="password" name="senhaCadastro" id="senhaCadastro" placeholder="Senha"/><br/>
                        <Input type="text" name="email" id="email" placeholder="E-mail"/><br/>
                        <Input type="text" name="rua" id="rua" placeholder="Rua"/><br/>
                        <Input type="number" name="numero" id="numero" placeholder="Numero"/><br/>
                        <Input type="text" name="bairro" id="bairro" placeholder="Bairro"/><br/>
                        <Input type="text" name="cidade" id="cidade" placeholder="Cidade"/><br/>
                        <Input type="text" name="estado" id="estado" placeholder="Estado"/><br/>
                        <Input type="text" name="pais" id="pais" placeholder="País"/><br/>
                        <Input type="number" name="cep" id="cep" placeholder="CEP"/><br/>
                        <Button onClick={this.cadastraUsuario.bind(this)}  color="success">Cadastrar</Button>

                    </Col>
                </Row>
            </Container>


    );
    }
    }

    export default Login;
