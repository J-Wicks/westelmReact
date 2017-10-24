import React, { Component } from 'react';
const thumbnails = [
  {
    small: require('../assets/product-small-a.jpg'),
    large: require('../assets/product-large-a.jpg')
  },
  {
    small: require('../assets/product-small-b.jpg'),
    large: require('../assets/product-large-b.jpg')
  },
  {
    small: require('../assets/product-small-c.jpg'),
    large: require('../assets/product-large-c.jpg')
  },
  {
    small: require('../assets/product-small-d.jpg'),
    large: require('../assets/product-large-d.jpg')
  },
]

export default class OptionsThumbnails extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: thumbnails[0].small,
    }
  }

  render() {
    return(
      <ol id="optionsThumbnails">
        {
          thumbnails.map(image => {
            const selected = this.props.selectedApron == image.large ? 'selected' : "";
            return (
            <li  onClick={()=> this.props.handleClick(image.large)}>
              <img className={selected} src={image.small}/>
            </li> 
          )
          })
        }
      </ol>
    )
  }
};
