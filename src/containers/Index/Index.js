import React, { Component } from 'react';
import { Link } from 'react-router';

import { urls } from '../../routes';


const propTypes = {
};


class IndexContainer extends Component {
  render() {
    return (
      <div className="list-group" style={{ textAlign: 'center' }}>
        <Link to={urls.list} className="list-group-item">
          <h4 className="list-group-item-heading">List</h4>
          <p className="list-group-item-text">Example with list objects</p>
        </Link>
        <Link to={urls.form} className="list-group-item">
          <h4 className="list-group-item-heading">Form</h4>
          <p className="list-group-item-text">Form example</p>
        </Link>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">Object change</h4>
          <p className="list-group-item-text">Object change example</p>
        </a>
      </div>
    );
  }
}


IndexContainer.propTypes = propTypes;

export default IndexContainer;