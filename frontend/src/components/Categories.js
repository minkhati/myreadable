import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';

class Categories extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    const categoriesList = categories.map((category, index) => {
      return (
        <li key={index}>
          <Link to={`/${category.name}`}>{category.name}</Link>
        </li>
      )
    })

    return (
      <div className='categories'>
        <ul className='categories-list'>
          <li key='All'>
            <Link to='/'>All</Link>
          </li>
          {categoriesList}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)