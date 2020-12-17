import React, { Component } from 'react';
import Category from './Category';

class CategoryFilters extends Component {
  render() {
    return (
      <div className="categories">
        <h5>Category filters</h5>
        {this.props.categories.map((category, index) => <Category key={index} category={category} handleClick={this.props.handleClick} filter={this.props.filter}/>)}       
      </div>
    );
  }
}

export default CategoryFilters;
