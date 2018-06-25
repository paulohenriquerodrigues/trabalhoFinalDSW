import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';
import UserProfile from './Usuario.js';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            produtos: []
        }
    }

    retornaProdutos(){
        fetch("http://localhost:8080/API_REST_DSW/webresources/Produto").then((response) => {
            return response.json();
        }).then((produtos) => {
            if(produtos)
                this.setState( {produtos} );
        })
    }

    componentWillMount(){
        this.retornaProdutos();
    }

    criaLinha(cards){
        return <div>
            <Row>
                <Col>
                    {cards[0]}
                </Col>
                <Col>
                    {cards[1]}
                </Col>
                <Col>
                    {cards[2]}
                </Col>
            </Row>
        </div>
    }

    click(){
        let produto = this.state.produtos[document.activeElement.id];
        if (produto){
            let achou = false;
            let carrinho = UserProfile.getCarrinho();

            for (let i = 0; i < carrinho.length; i++){
                if (carrinho[i].ID === produto.ID)
                    achou = true;
            }

            if (!achou)
                carrinho[carrinho.length] = produto;

            UserProfile.setCarrinho(carrinho);
        }
    }

    criaCard(caminho, titulo, texto, preco, id){
        return <Card>
            <CardImg top width="20%" src={caminho} height="200px" />
            <CardBody>
                <CardTitle>{titulo}</CardTitle>
                <CardSubtitle>{preco}</CardSubtitle>
                <CardText>{texto}</CardText>
                <Button id={id} onClick={this.click.bind(this)}>Comprar</Button>
            </CardBody>
        </Card>
    }

    criaCards(produtos){
        let totalLinhas = Math.trunc(produtos.length / 3);

        if (produtos.length % 3 !== 0)
            totalLinhas++;

        let cards = [];

        let contador = 0;
        for (let i = 1; i <= totalLinhas; i++){
            let cardsLinhas = [];

            for (let j = 0; j < 3; j++){
                let produto = produtos[contador];

                if (produto) {
                    cardsLinhas[j] = this.criaCard("http://localhost:8080/API_REST_DSW/webresources/Imagem/" + produto.caminhoImagem,
                        produto.nome,
                        produto.descricao,
                        "R$" + produto.preco,
                        contador);
                }
                contador++;
            }

            cards[i - 1] = this.criaLinha(cardsLinhas);
        }

        return cards
    }

    render() {
      return (
        <div>
            {this.criaCards(this.state.produtos)}
        </div>
      );
    }
}

export default Home;
