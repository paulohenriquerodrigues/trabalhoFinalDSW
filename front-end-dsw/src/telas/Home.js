import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

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

function criaCards(){
    return <div>
            <section class="choice-grid">
                <Card>
                    <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" className="card-img float-left" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" className="float-left" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </section>
        </div>
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
            {criaCards()}
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
