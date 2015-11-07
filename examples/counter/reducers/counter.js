import { INCREMENT_COUNTER, DECREMENT_COUNTER, MOVE_STAGE, SELECT_STAGE } from '../constants/ActionTypes';

const initalState = {
    counter: 0,
    stages: [0,1,2],
    selectedStage: 0
};

const createState = (counter, stages, stage) => {
    return {
        counter: counter,
        stages: stages,
        selectedStage: stage
    };
};

export default function counter(state = initalState, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
      return createState(state.counter + 1, state.stages, state.stage);
  case DECREMENT_COUNTER:
      return createState(state.counter - 1, state.stages, state.stage);
  case MOVE_STAGE:
      return createState(state.counter, [state.stages.length, ...state.stages], state.stage);
  case SELECT_STAGE:
      return createState(state.counter, state.stages, action.stageNum);
  default:
    return state;
  }
}
