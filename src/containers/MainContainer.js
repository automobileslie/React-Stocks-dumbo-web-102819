import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state= {
    stocks: [],
    portfolioStocks: [],
    sortedByTickerName: false,
    sortedByTech: false,
    sortedByFinance: false,
    sortedBySportswear: false,
    sortedByPrice: false
  }

componentDidMount () {
  fetch("http://localhost:3000/stocks")
  .then(r => r.json())
  .then(data => {
    this.setState({
      stocks: data
    })
  })
}

addToPortfolio= (stock) => {

  this.setState({
    portfolioStocks: [...this.state.portfolioStocks, stock]
  })
}

removeFromPortfolio= (stock) => {

  const newPortfolioStocks= this.state.portfolioStocks.filter(data => {
    return data !== stock
  })

  this.setState({
    portfolioStocks: newPortfolioStocks
  })
}

settingBooleanForSorting= (event) => {
  console.log(event.target.value)

  if (event.target.value === "Alphabetically") {
    this.setState({
      sortedByTickerName: !this.state.sortedByTickerName,
      sortedByTech: false,
      sortedByFinance: false,
      sortedBySportswear: false,
      sortedByPrice: false
    })
  }

  if (event.target.value === "Price") {
    this.setState({
      sortedByTickerName: false,
      sortedByTech: false,
      sortedByFinance: false,
      sortedBySportswear: false,
      sortedByPrice: !this.state.sortedByPrice
    })
  }

  if (event.target.value === "Tech") {
    this.setState({
      sortedByTickerName: false,
      sortedByTech: !this.state.sortedByTech,
      sortedByFinance: false,
      sortedBySportswear: false,
      sortedByPrice: false
    })
  }

  if (event.target.value === "Finance") {
    this.setState({
      sortedByTickerName: false,
      sortedByTech: false,
      sortedByFinance: !this.state.sortedByFinance,
      sortedBySportswear: false,
      sortedByPrice: false
    })
  }

  if (event.target.value === "Sportswear") {
    this.setState({
      sortedByTickerName: false,
      sortedByTech: false,
      sortedByFinance: false,
      sortedBySportswear: !this.state.sortedBySportswear,
      sortedByPrice: false
    })
  }

  if (event.target.value === "All") {
    this.setState({
      stocks: this.state.stocks,
      portfolioStocks: this.state.portfolioStocks,
      sortedByTickerName: false,
      sortedByTech: false,
      sortedByFinance: false,
      sortedBySportswear: false,
      sortedByPrice: false
    })
  }
}

renderStocks= () => {

let stocks= [...this.state.stocks]

  let sortedByTech = this.state.stocks.filter(stock => {
    return stock.type==="Tech"
  })

  let sortedByFinance= this.state.stocks.filter(stock => {
    return stock.type==="Finance"
  })

  let sortedBySportswear= this.state.stocks.filter(stock => {
    return stock.type==="Sportswear"
  })

  if (this.state.sortedByTech) {
    stocks=sortedByTech
  }

  if (this.state.sortedByFinance) {
    stocks=sortedByFinance
  }

  if (this.state.sortedBySportswear) {
    stocks=sortedBySportswear
  }

  if (this.state.sortedByTickerName) {
    stocks= stocks.sort((a, b) => {
      return a.ticker.localeCompare(b.ticker);
    });
}

if (this.state.sortedByPrice) {
  stocks= stocks.sort((a, b) => {
    return b.price - a.price;  
})
}

  return stocks
}
  
  render() {
    return (

      <div>
        <SearchBar sortedByTickerName={this.state.sortedByTickerName} sortedByPrice={this.state.sortedByPrice} settingBooleanForSorting={this.settingBooleanForSorting} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.renderStocks()} handleClick={this.addToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} handleClick = {this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
