import React from 'react';

export default class SearchBar extends React.Component{

  
  render() {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value= "Alphabetically" checked={this.props.sortedByTickerName} onChange={this.props.settingBooleanForSorting}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value= "Price" checked={this.props.sortedByPrice} onChange={this.props.settingBooleanForSorting}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.props.settingBooleanForSorting}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="All">All</option>
        </select>
      </label>

    </div>
  );
}

}
