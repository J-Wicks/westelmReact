import React, { Component } from 'react';

export default class Secitons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: [true, false, false],
    }
  }
  handleClick(index) {
    let toggledExpanded = this.state.expanded;
    toggledExpanded[index] = !toggledExpanded[index];
    this.setState({
      expanded: toggledExpanded,
    })
  }

  render () {
    return (
      <div id="sections">
        {
          this.state.expanded.map((isExpanded, index) => {
            let expanded = isExpanded ? 'Expanded' : "Collapsed";
            const classes = expanded.toLowerCase() + ' collapsableMenu';
            return (
              <div onClick={() => this.handleClick(index)} className={classes}>
                <h2>{expanded}</h2>
                <p>
                  This section is expanded. This section can be collapsed by clicking on the "Expanded" text. This section is expanded. This section can be collapsed by clicking on the "Expanded" text.
                </p>
              </div>
            )
          })
        }
    </div>
    )
  }
}