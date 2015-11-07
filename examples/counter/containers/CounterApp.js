import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

class CounterApp extends Component {
  render() {
      const { counter, stages, selectedStage, dispatch } = this.props;
    return (
            <Counter counter={counter} stages={stages} selectedStage={selectedStage}
               {...bindActionCreators(CounterActions, dispatch)} />
    );
  }
}

function select(state) {
    return {
        counter: state.counter.counter,
        stages: state.counter.stages,
        selectedStage: state.counter.selectedStage
    };
}

export default connect(select)(CounterApp);
