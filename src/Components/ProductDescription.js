import React from 'react';
import Sections from './Sections';

export default (props) => (
  <div id="productDescription">
    <h1>
      Williams-Sonoma Classic Apron, French Blue
    </h1>
    <p>
      A generiously sized apron is a necessity in any kitchen, and ours will brighten yours with lively color. Sewn of thick cotton, it can be personalized or monogrammed with up to nine characters, all the same height, embroidered in your choice of color. An apron of this quality makes a wecome gift for any cook.
    </p>
    <ul>
      <li>
        Durable 100% cotton construction
      </li>
      <li>
        Adjustable neckband ensures a good fit
      </li>
      <li>
        Roomy front pockets hold small tools
      </li>
      <li>
        Machine-wash
      </li>
    </ul>
    <h5 id="price">
      19.95
    </h5>
    <form>
        <input id="quantity" type="number" value="1" className="block" />
        <button type="submit" id="checkoutButton" className="block" onClick={props.toggleModal}>
        </button>
    </form>
    <Sections />
  </div>
);
