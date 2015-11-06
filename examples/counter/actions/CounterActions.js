import { INCREMENT_COUNTER, DECREMENT_COUNTER, MOVE_STAGE } from '../constants/ActionTypes';

export function moveStage() {
  return {
    type: MOVE_STAGE,
    stageNum: 1,
    newIndex: 2
  };
}

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter} = getState();

    if (counter.counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
