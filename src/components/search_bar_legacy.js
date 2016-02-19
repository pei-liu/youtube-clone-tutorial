import React from 'react';

var SearchBarLegacy = React.createClass({
  getInitialState: function() {
    return {
      term: ''
    }
  },

  render: function() {
    var that = this;
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={function(event){that.onInputChange(event.target.value)}} />
      </div>
    );
  },

  onInputChange: function(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
});

export default SearchBarLegacy;
