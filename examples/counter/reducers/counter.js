import { INCREMENT_COUNTER, DECREMENT_COUNTER, MOVE_STAGE } from '../constants/ActionTypes';

const initalState = {
  counter: 0,
  stages: [0,1,2]
};

const createState = (counter, stages) => {
    return {
        counter: counter,
        stages: stages
    };
};

export default function counter(state = initalState, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return createState(state.counter + 1, state.stages);
  case DECREMENT_COUNTER:
    return createState(state.counter - 1, state.stages);
  case MOVE_STAGE:
    return createState(state.counter, [state.stages.length, ...state.stages]);
  default:
    return state;
  }
}
