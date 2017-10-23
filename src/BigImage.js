import React, { Component } from 'react';
import defaultImg from './assets/product-large-a.jpg';

export default class BigImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageSource: defaultImg,
    };
  }

  render() {
    return(
      <div>
        <img id="selectedImg" alt="Monogrammed Apron" src={this.state.imageSource} />
      </div>
    )
  }
}