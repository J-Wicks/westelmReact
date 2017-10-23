import React, { Component } from 'react';
import Header from './Header';
import NavigationLinks from './NavigationLinks';
import BreadCrumb from './BreadCrumb';
import BigImage from './BigImage';
import ProductDescription from './ProductDescription';
import OptionsThumbnails from './OptionsThumbnails';
import Footer from './Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="navigation">
          <NavigationLinks />
          <BreadCrumb />
        </div>
        <div id="productContent">
          <BigImage />
          <ProductDescription />
        </div>
        <OptionsThumbnails />
        <Footer />
      </div>
    );
  }
}

export default App;
