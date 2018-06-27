import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Home from './telas/Home';
import Admin from './telas/Admin';
import Login from './telas/Login';
import Carrinho from './telas/Carrinho';
import UserProfile from './telas/Usuario';
import TelaUsuario from './telas/TelaUsuario';

import loginicone from './imagens/login.png';
import homeicone from './imagens/home.png';
import adminicone from './imagens/admin.png';
import carrinhoicone from './imagens/carrinho.png';


class Template extends Component {

    verificaRotas(){
        let componentAdmin = Admin;
        let componentLogin = Login;

        if (UserProfile.getCpf() === ""){
            componentAdmin = Login;
        }else{
            if (UserProfile.getAdmin === true){
                componentLogin = Admin;
            }else {
                componentLogin = TelaUsuario;
                componentAdmin = Login;
            }
        }

        return <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Admin' component={componentAdmin}/>
            <Route path='/Login' component={componentLogin}/>
            <Route path='/Carrinho' component={Carrinho}/>
        </Switch>
    }

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
                    {this.verificaRotas()}
                </main>

                <footer className="index-footer">
                    <h5>Acadêmicos Ivens D. Müller e Paulo H. Rodrigues</h5>
                </footer>

            </div>
        );
    }
}

export default Template;
