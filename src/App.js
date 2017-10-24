import React, { Component } from 'react';
import Header from './Components/Header';
import NavigationLinks from './Components/NavigationLinks';
import BreadCrumb from './Components/BreadCrumb';
import BigImage from './Components/BigImage';
import ProductDescription from './Components/ProductDescription';
import OptionsThumbnails from './Components/OptionsThumbnails';
import Footer from './Components/Footer';
import blueApron from './assets/product-large-a.jpg';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayModal: false,
      selectedApron: blueApron
    }
    this.handleApronClick = this.handleApronClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.setState({
      displayModal: true,
    });
    setTimeout(function() { this.setState({displayModal: false});}.bind(this), 1000)
  }

  handleApronClick(apron) {
    console.log(apron);
    this.setState({
      selectedApron: apron,
    })
  }

  render() {
    return (
      <div>
        {
          this.state.displayModal ?
          <p id="checkoutModal">Added to cart</p> : null
        }
        <Header />
        <div id="navigation">
          <NavigationLinks />
          <BreadCrumb />
        </div>
        <div id="productContent">
          <BigImage selectedApron={this.state.selectedApron}/>
          <ProductDescription toggleModal={this.toggleModal}/>
        </div>
        <OptionsThumbnails selectedApron={this.state.selectedApron }handleClick={this.handleApronClick}/>
        <Footer />
      </div>
    );
  }
}

export default App;
