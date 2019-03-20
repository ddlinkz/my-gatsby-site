import React, { Component } from 'react';
import threeEntryPoint from '../threejs/threeEntryPoint';

export default class ThreeContainer extends Component {

  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render () {
      return (
        <div class="three-canvas" 
             ref={element => this.threeRootElement = element} />
      );
  }
}