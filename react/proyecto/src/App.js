import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './styles/App.sass';
import SimpleSlider from './Component/SliderView/slider'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home'

import Cardproductos from './Component/CardProductos/Cardproducto';
import Cardproducto from './Component/CardProductos/Cardproducto';
import Coorporativos from './Component/Coorporativos/Coorporativos';
import Promociones from './Component/Promociones/Promociones';
import Registro from './Component/Registro/Registro'
import Login from './Component/Login/Login'
import Formulario from './Component/Coorporativos/Formulario';

// import Promociones from './Component/Promociones/Promociones';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import loginYregistro from './Component/loginYregistro/logi&registro';
import carritoDeCompras from './Component/carritoDeCompras/carritoDeCompras';
import Compra from './Component/Compra/compra';
import Detalle from './Component/DetalleProducto/Detalle';
import AuthService from "./Services/Auth";

export default class componentName extends Component {
  _sAuth = new AuthService();

  constructor(props) {
    super(props);

    if (this._sAuth.isLogged()) {
      this.state = {
        isLogged: true
      };
    } else {
      this.state = {
        isLogged: false
      };
    }
    this.signin.bind(this);
  }

  signin = (email, pass) => {
    this._sAuth.login(email, pass).then(rpta => {
      console.log(rpta);
      if (rpta.status === 200) {
        this._sAuth.guardarToken(rpta.data.token);
        this.setState({
          isLogged: true
        });
        console.log(this.state.isLogged);
      }
    });
  };

  signout = () => {
    this._sAuth.cerrarSesion();
    this.setState({ isLogged: false });
  }

  render() {
    return (
      <Fragment>

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coorporativos" component={Coorporativos} />
            <Route exact path="/promociones" component={Promociones} />
            <Route exact path="/formulario" component={Formulario} />
            <Route exact path="/loginYregistro" component={loginYregistro} ></Route>
            <Route exact path="/carritoDeCompras" component={carritoDeCompras} ></Route>
            <Route exact path="/compra" component={Compra}></Route>
            <Route exact path="/registro" component={Registro}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/detalle" component={Detalle}></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </Fragment>

    )
  }

}