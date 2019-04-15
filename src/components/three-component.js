import React, { Component } from 'react';
import threeEntryPoint from '../threejs/threeEntryPoint';

export default class ThreeContainer extends Component {

  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render () {
      return (
        <div class="three-canvas"
          style={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
             ref={element => this.threeRootElement = element} />
      );
  }
}