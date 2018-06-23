import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Home from './telas/Home';
import Admin from './telas/Admin';
import Login from './telas/Login';
import Carrinho from './telas/Carrinho';

import loginicone from './imagens/login.png';
import homeicone from './imagens/home.png';
import adminicone from './imagens/admin.png';
import carrinhoicone from './imagens/carrinho.png';


class Template extends Component {
    render() {
        return (
            <div className="index">

                <header className="index-header">
                    <Link to='/'><img src={homeicone} className="btn btn-toolbar float-left"/></Link>
                    <Link to='/Admin'><img src={adminicone} className="btn btn-toolbar float-right"/></Link>
                    <Link to='/Login'><img src={loginicone} className="btn btn-toolbar float-right"/></Link>
                    <Link to='/Carrinho'><img src={carrinhoicone} className="btn btn-toolbar float-right"/></Link>
                    <h1 className="index-title">Droneseta</h1>

                </header>


                <main>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/Admin' component={Admin}/>
                        <Route path='/Login' component={Login}/>
                        <Route path='/Carrinho' component={Carrinho}/>
                    </Switch>
                </main>

                <footer className="index-footer">
                    <h5>Acadêmicos Ivens Muller e Paulo H. Rodrigues</h5>
                </footer>

            </div>
        );
    }
}

export default Template;
