import {
  PARTNER_KEY_UPDATED,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE
} from '../../utils/constants/authActions';
import { ISetPartnerKey, IPostLogin } from './types';
import { ILogin } from '../../utils/authTypes';

export const setPartnerKey: ISetPartnerKey = (key: string) => ({
  type: PARTNER_KEY_UPDATED,
  payload: key
});

export const postLogin: IPostLogin = (details: ILogin) => ({
  type: POST_LOGIN_REQUEST,
  payload: details
});
export const onErrorLogin: any = () => ({
  type: POST_LOGIN_FAILURE,
  payload: {}
})
export const updateLoginDetails: any = (details: any) => ({
  type: POST_LOGIN_SUCCESS,
  payload: details
});
