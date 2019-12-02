import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './styles/App.sass';
import SimpleSlider from './Component/SliderView/slider'
import Header from './Component/Header/Header'
export default class componentName extends Component{
  render(){
     return(
      <Fragment>
        <Header></Header>
        <SimpleSlider></SimpleSlider>
      </Fragment>
  
    )
  }
 
}


