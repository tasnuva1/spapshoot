import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSumit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSumit} className="ui form" action="">
          <div className="field">
            <label>Image Search</label>
            <input
              placeholder="Search"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
