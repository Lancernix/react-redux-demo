import { REGAIN, SALEOUT } from '../actionType';

const initState = [
  { id: '01', name: '台北市', price: 600 },
  { id: '02', name: '高雄市', price: 600 },
  { id: '03', name: '新北市', price: 600 },
  { id: '04', name: '台中市', price: 600 },
  { id: '05', name: '台南市', price: 600 },
  { id: '06', name: '桃园市', price: 600 },
  { id: '07', name: '基隆市', price: 400 },
  { id: '08', name: '新竹市', price: 400 },
  { id: '09', name: '嘉义市', price: 400 },
];

const estateReducer = (preState = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case SALEOUT:
      return preState.filter((item) => data.id !== item.id);
    case REGAIN:
      return [...preState, data];
    default:
      return preState;
  }
};

export default estateReducer;
