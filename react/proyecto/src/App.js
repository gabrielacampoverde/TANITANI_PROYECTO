import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './styles/App.sass';
import SimpleSlider from './Component/SliderView/slider'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Cardproductos from './Component/CardProductos/Cardproducto';
import Cardproducto from './Component/CardProductos/Cardproducto';
// import Coorporativos from './Component/Coorporativos/Coorporativos';
import Promociones from './Component/Promociones/Promociones';

export default class componentName extends Component{
  render(){
     return(
      <Fragment>
        <Header></Header>
        <SimpleSlider></SimpleSlider>
        <Cardproducto></Cardproducto>
        {/* <Coorporativos></Coorporativos> */}
        <Promociones></Promociones>
        <Footer/>
      </Fragment>
  
    )
  }
 
}


