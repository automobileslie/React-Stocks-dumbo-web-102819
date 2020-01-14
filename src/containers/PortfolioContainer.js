import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolioStocks.map(stock => {
              return <div>
                <Stock handleClick={this.props.handleClick} stock={stock}> {stock.name}</Stock>
                </div>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
