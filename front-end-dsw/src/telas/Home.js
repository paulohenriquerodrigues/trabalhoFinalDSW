import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

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
            console.log(produtos);
        })
    }

    componentWillMount(){
        this.retornaProdutos();
    }
    render() {
      return (
        <div>
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
