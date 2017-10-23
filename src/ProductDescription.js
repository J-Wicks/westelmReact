import React from 'react';

export default () => (
  <div id="productDescription">
    <h1>
      Williams-Sonoma classic Apron, French Blue
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
        <button type="submit" id="checkoutButton" className="block">
        </button>
    </form>

    <div id="sections">
      <div className="expanded collapsableMenu">
        <h2>Expanded</h2>
        <p>
          This section is expanded. This section can be collapsed by clicking on the "Expanded" text. This section is expanded. This section can be collapsed by clicking on the "Expanded" text.
        </p>
      </div>
      <div className="collapsed collapsableMenu">
        <h2>Collapsed</h2>
        <p>
          This section is expanded. This section can be collapsed by clicking on the "Expanded" text. This section is expanded. This section can be collapsed by clicking on the "Expanded" text.
        </p>
      </div>
      <div className="collapsed collapsableMenu">
        <h2>Collapsed</h2>
        <p>
          This section is expanded. This section can be collapsed by clicking on the "Expanded" text. This section is expanded. This section can be collapsed by clicking on the "Expanded" text.
        </p>
      </div>
    </div>
  </div>
);
