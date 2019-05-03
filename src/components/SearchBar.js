import React from "react";
import SubmitButton from "./SubmitButton";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmission(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form inline fields">
          <label htmlFor="" className="">
            Image Search
          </label>
          <input
            className="twelve wide field"
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

export default SearchBar;
