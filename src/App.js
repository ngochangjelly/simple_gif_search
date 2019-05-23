import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifInfo from './GifInfo';
import { thunk_action_creator } from './actions/fetchAction';
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const gif = this.getGifName.value;
    this.props.dispatch(thunk_action_creator(gif));
    this.getGifName.value = '';
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">Enter GIF keyword</h2>
          <input
            type="text"
            placeholder="Enter GIF name"
            required
            ref={input => (this.getGifName = input)}
          />
          <button className="button">Submit</button>
        </form>
        {this.props.data.isFetching && (
          <h3 className="loading" alignItems="center">
            Loading...
          </h3>
        )}
        {this.props.data.isError && (
          <h3 className="error">No such GIF exists.</h3>
        )}
        {this.props.data.gifData && (
          <GifInfo className="grid-container" gif={this.props.data.gifData} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  };
};
export default connect(mapStateToProps)(App);
