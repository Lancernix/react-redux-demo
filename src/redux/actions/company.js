import { SALEOUT, REGAIN } from '../actionType';

export const saleout = (data) => ({ type: SALEOUT, data: data });
export const regain = (data) => ({ type: REGAIN, data: data });
