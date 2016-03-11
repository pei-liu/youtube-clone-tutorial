

var SearchBarLegacy = React.createClass({
  getInitialState: function() { /* ... */ },

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
    this.setState({ term: term});
    this.props.onSearchTermChange(term);
  }
});

// Topics:
// 1. Class function syntax
// 2. Arrow function (scope)
// 3. Destructuring ({ term:term })
