import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';

function criaPaginas(Produtos) {
    let totalPaginas = Math.trunc(Produtos.length / 9);

    if (Produtos.length % 9 != 0)
        totalPaginas++;

    let paginas = [];
    for (let i = 1; i <= totalPaginas; i++){
        paginas[i] = criaPagina(i);
    }
    return paginas;
}

function criaPagina(numPagina){
   return <PaginationItem>
              <PaginationLink href="#">
                  {numPagina}
              </PaginationLink>
          </PaginationItem>
}

function criaLinha(cards){
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

function criaCard(caminho, titulo, texto, preco){
    return <Card>
        <CardImg top width="30%" src={caminho} height="200px" />
        <CardBody>
            <CardTitle>{titulo}</CardTitle>
            <CardSubtitle>{preco}</CardSubtitle>
            <CardText>{texto}</CardText>
            <Button>Comprar</Button>
        </CardBody>
    </Card>
}

function criaCards(produtos){
    let totalLinhas = Math.trunc(produtos.length / 3);

    if (produtos.length % 3 != 0)
        totalLinhas++;

    let cards = [];

    let contador = 0;
    for (let i = 1; i <= totalLinhas; i++){
        let cardsLinhas = [];

        for (let j = 0; j < 3; j++){
            let produto = produtos[contador];
            contador++;

            if (produto) {
                cardsLinhas[j] = criaCard("http://localhost:8080/API_REST_DSW/webresources/Imagem/" + produto.caminhoImagem,
                                          produto.nome,
                                          produto.descricao,
                                          "R$" + produto.preco);
            }
        }

        cards[i - 1] = criaLinha(cardsLinhas);
    }
    return cards
}

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
            this.setState( {produtos} );
        })
    }

    componentWillMount(){
        this.retornaProdutos();
    }

    render() {
      return (
        <div>
            {criaCards(this.state.produtos)}
            <Pagination size="md">
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                {criaPaginas(this.state.produtos)}
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        </div>
      );
    }
}

export default Home;
