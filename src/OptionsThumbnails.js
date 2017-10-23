import React from 'react';

const thumbnails = [require('./assets/product-small-a.jpg'),require('./assets/product-small-b.jpg'),require('./assets/product-small-c.jpg'),require('./assets/product-small-d.jpg')]
export default () => (
  <ol id="optionsThumbnails">
    {
      thumbnails.map(imgSrc => (
        <li value="./public/assets/product-large-a.jpg">
          <img src={imgSrc}/>
        </li> 
      ))
    }
  </ol>
)