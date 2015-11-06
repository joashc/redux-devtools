import React, { Component, PropTypes } from 'react';
import {Motion, spring} from 'react-motion';

class Stage extends Component {
  static propTypes = {
    i: PropTypes.number.isRequired,
    stages: PropTypes.array.isRequired
  };

  constructor(props, context) {
      super(props, context);
      this.state = {
          isPressed: false
      };
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseDown() {
      this.setState({isPressed: true});
  }

  onMouseUp() {
      this.setState({isPressed: false});
      console.log(this.state);
  }

  springTernary(bool, trueVal, falseVal) {
    const springConfig = [300, 50];
    return bool ? spring(trueVal, springConfig) : spring(falseVal, springConfig);
  }

  render() {
    const { stages, i } = this.props;
    const { isPressed } = this.state;
    const springConfig = [300, 50];
    const style = {
        scale: isPressed ? spring(1.1, springConfig) : spring(1, springConfig),
        y: spring(stages.indexOf(i) * 100, springConfig)
    };
    return (
        <Motion style={style}>
          {({y, scale}) =>
            <div
              onMouseDown={this.onMouseDown}
              onMouseUp={this.onMouseUp}
              className="demo8-item"
              style={{
                transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                boxShadow: `rgba(0, 0, 0, 0.2) 0px 1px 2px 0px`,
              }}>
              {stages.indexOf(i) + 1} - {i}
            </div>
          }
        </Motion>
    );
  };
};

export default class Counter extends Component {
  static propTypes = {
    moveStage: PropTypes.func.isRequired,
    stages: PropTypes.array.isRequired
  };

  render() {
    const { increment, incrementIfOdd, decrement, counter, moveStage, stages } = this.props;

    return (
      <div className="demo8">
        <button onClick={moveStage}>Move Stage</button>
        {stages.map(i => <Stage i={i} stages={stages} key={i}/>)}
      </div>
    );
  }
};
