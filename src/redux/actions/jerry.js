import { BUY, SALE } from '../actionType';

export const buy = (data) => ({ type: BUY, data: data });
export const sale = (data) => ({ type: SALE, data: data });
