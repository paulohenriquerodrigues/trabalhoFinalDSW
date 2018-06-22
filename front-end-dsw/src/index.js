import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './imagens/home.png';
import login from './imagens/login.png';
import carrinho from './imagens/carrinho.png';
import admin from './imagens/admin.png';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <div className="index">
        <header className="index-header">
            <img src={home} className="btn btn-toolbar float-left"/>
            <img src={admin} className="btn btn-toolbar float-right"/>
            <img src={login} className="btn btn-toolbar float-right"/>
            <img src={carrinho} className="btn btn-toolbar float-right"/>
            <h1 className="index-title">Droneseta</h1>
        </header>
    </div>,
    document.getElementById('root'));
//registerServiceWorker();
