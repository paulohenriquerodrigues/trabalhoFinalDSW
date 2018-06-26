import React, { Component } from 'react';
import UserProfile from "./Usuario.js";
import {Table, Button} from 'reactstrap';
import ReactDOM from 'react-dom';
import Template from '../Template';
import { BrowserRouter } from 'react-router-dom';

class Page2 extends Component {

  componentWillMount(){
  }

  clickRemover(){
    let carrinho = UserProfile.getCarrinho();
    let novoCarrinho = [];
    let diminuir = 0;

    if (carrinho.length !== 1) {

        for (let i = 0; i < carrinho.length; i++) {
            if (i != document.activeElement.id)
                novoCarrinho[i - diminuir] = carrinho[i];
            else diminuir = 1;
        }
    }

    UserProfile.setCarrinho(novoCarrinho);
    console.log(UserProfile.getCarrinho());
    ReactDOM.render(<BrowserRouter>
                        <Template />
                    </BrowserRouter>,
                    document.getElementById('root'))
  }

  criaRow(caminhoImagem, produto, descricao, preco, id){
    return <tr>
              <td><img src={caminhoImagem} width="50px" height="50px"/></td>
              <td>{produto}</td>
              <td>{descricao}</td>
              <td>{preco}</td>
              <td><Button id={id} onClick={this.clickRemover.bind(this)}>Remover</Button></td>
          </tr>
  }

  criaTabelaCarrinho(){
    let rows = [];
    let carrinho = UserProfile.getCarrinho();

    for (let i = 0; i < carrinho.length; i++){
      rows[i] = this.criaRow("http://localhost:8080/API_REST_DSW/webresources/Imagem/" + carrinho[i].caminhoImagem,
                             carrinho[i].nome,
                             carrinho[i].descricao,
                             "R$" + carrinho[i].preco,
                             i);
    }

    return rows;
  }

  finalizarCompra(){
    let carrinho = UserProfile.getCarrinho();

    if (carrinho.length === 0){
      alert("Seu carrinho está vazio!");
    }else{
        if (UserProfile.getCpf() === ""){
            alert("Usuário não está logado! Por favor, vá para a página de login e efetue seu login ou cadastro!");
        }else {
            fetch("http://localhost:8080/API_REST_DSW/webresources/Pedido/" + UserProfile.getCpf(), {
                method: "PUT",
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(carrinho)
            }).then(function (result) {
                alert(result);
                UserProfile.setCarrinho([]);
                ReactDOM.render(<BrowserRouter>
                        <Template/>
                    </BrowserRouter>,
                    document.getElementById('root'));
            });
        }
    }
  }

  render() {
    return (
      <div>
        <h2>Carrinho
        </h2>
          <Table hover>
              <thead>
              <tr>
                  <th></th>
                  <th>Produto</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th></th>
              </tr>
              </thead>
              <tbody>
                  {this.criaTabelaCarrinho()}
              </tbody>
          </Table>
          <Button color="primary" size="lg" onClick={this.finalizarCompra.bind(this)}>Finalizar Compra</Button>
      </div>
    );
  }
}

export default Page2;
