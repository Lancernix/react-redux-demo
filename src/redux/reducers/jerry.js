import { BUY, SALE } from '../actionType';

const initState = [];

const jerryReducer = (preState = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case BUY:
      return [...preState, data];
    case SALE:
      return preState.filter((item) => data.id !== item.id);
    default:
      return preState;
  }
};

export default jerryReducer;
