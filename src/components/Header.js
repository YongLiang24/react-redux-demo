import React from 'react';
import { connect } from 'react-redux';

import { updateTitle } from '../actions/headerActions';

const Header = props => {

    return (
      <header className="App-header">
        <div onClick={props.updateTitle}>
          {props.title} Tally
        </div>
      </header>
    )
  
}

const mapStateToProps = state => {
  return {
    title: state.header.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTitle: () => dispatch(updateTitle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
