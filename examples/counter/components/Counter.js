import React, { Component, PropTypes } from 'react';
import {Motion, spring} from 'react-motion';
import NVD3Chart from 'react-nvd3';

class Stage extends Component {
    static propTypes = {
        i: PropTypes.number.isRequired,
        stages: PropTypes.array.isRequired,
        selectStage: PropTypes.func.isRequired,
        selectedStage: PropTypes.number.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            isPressed: false
        };
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onMouseDown() {
        this.setState({isPressed: true});
    }

    onClick() {
        console.log('clicky');
        const { i, selectStage } = this.props;
        selectStage(i);
    }

    onMouseUp() {
        this.setState({isPressed: false});
    }

    springTernary(bool, trueVal, falseVal) {
        const springConfig = [300, 50];
        return bool ? spring(trueVal, springConfig) : spring(falseVal, springConfig);
    }

    render() {
        const { stages, i, selectedStage } = this.props;
        const { isPressed } = this.state;
        const isSelected = selectedStage === i;
        const yOffset = selectedStage < i ? 90 : 0;
        const springConfig = [300, 50];
        const style = {
            scale: isSelected ? spring(1.02, springConfig) : isPressed ? spring(1.05, springConfig) : spring(1, springConfig),
            y: spring(stages.indexOf(i) * 100 + yOffset, springConfig),
            shadow: isSelected ? spring(3, springConfig) : isPressed ? spring(6, springConfig) : spring(1, springConfig),
            height: isSelected ? spring(2, springConfig) : spring(1, springConfig)
        };
 const data = [
        {
            key: 'PassThreshold',
            values: [
                {
                    "label" : "A" ,
                    "value" : 2
                }
            ]
        },
        {
            key: 'Participants',
            values: [
                {
                    "label" : "A" ,
                    "value" : 5
                }
            ]
        },
     {
         key: 'Participants',
         values: [
             {
                 "label" : "A" ,
                 "value" :10
             }
         ]
     },
    ];
        return (
            <Motion style={style}>
                {({y, scale, shadow, height}) =>
                <div
                onMouseEnter={this.onMouseDown}
                onMouseLeave={this.onMouseUp}
                 onClick={this.onClick}
                className="demo8-item"
                style={{
                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                    height: `${90 * height}px`,
                    zIndex: isPressed ? 99 : 1
                }}>

                 <div
                    style={{
                        transform: `translate3d(-35px, 25px, 0) scale(${scale})`,
                        WebkitTransform: `translate3d(-35px, 25px, 0) scale(${scale})`
                    }}
                 onClick={() => { console.log('hey'); }}
                 >
                 <NVD3Chart
                    id="barChart"
                    type="multiBarHorizontalChart"
                    onClick={( ) => {console.log('hey');}}
                    datum={data}
                    stacked="true"
                    x="label"
                    height="30px"
                    showValues={false}
                    showXAxis={false}
                    showYAxis={false}
                    showLegend={false}
                    showControls={false}
                    y="value"
                    style={{
                        zIndex: isPressed ? 99 : 1
                    }}/>
                 </div>
                </div>
            }
            </Motion>
        );
    };
};

export default class Counter extends Component {
    static propTypes = {
        moveStage: PropTypes.func.isRequired,
        selectStage: PropTypes.func.isRequired,
        stages: PropTypes.array.isRequired,
        selectedStage: PropTypes.number.isRequired
    };

    render() {
        const { selectedStage, selectStage, increment, incrementIfOdd, decrement, counter, moveStage, stages } = this.props;

        return (
        <div className="demo8-outer">
            <button onClick={moveStage}>Move Stage</button>
                {stages.map(i => <Stage i={i} stages={stages} key={i} selectStage={selectStage} selectedStage={selectedStage}/>)}
        </div>
        );
    }
};
