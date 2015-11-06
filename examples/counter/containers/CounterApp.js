import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

class CounterApp extends Component {
  render() {
    const { counter, stages, dispatch } = this.props;
    return (
      <Counter counter={counter} stages={stages}
               {...bindActionCreators(CounterActions, dispatch)} />
    );
  }
}

function select(state) {
  return {
    counter: state.counter.counter,
    stages: state.counter.stages
  };
}

export default connect(select)(CounterApp);
