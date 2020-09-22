import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSumit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div class="flexsearch">
        <div class="flexsearch--wrapper">
          <form
            onSubmit={this.onFormSumit}
            class="flexsearch--form"
            action=""
            // method="post"
          >
            <div class="flexsearch--input-wrapper">
              <input
                class="flexsearch--input"
                placeholder="Search..."
                type="text"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
            <input class="flexsearch--submit" type="submit" value="&#10140;" />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
