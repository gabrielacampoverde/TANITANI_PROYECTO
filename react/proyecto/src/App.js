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
// import Promociones from './Component/Promociones/Promociones';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import loginYregistro from './Component/loginYregistro/logi&registro';
export default class componentName extends Component {
  render() {
    return (
      <Fragment>

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coorporativos" component={Coorporativos} />
            <Route exact path="/loginYregistro" component={loginYregistro} ></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </Fragment>

    )
  }

}