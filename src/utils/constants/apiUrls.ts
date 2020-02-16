import { getApiUrl } from '../helpers';

export const postTermsUrl: string = `${getApiUrl()}/partner/signup/terms`;
export const postSignupUrl: string = `${getApiUrl()}/partner/signup`;
export const postDetailsFirstUrl: string = `${getApiUrl()}/partner/signup/2`;
export const postDetailsSecondUrl: string = `${getApiUrl()}/partner/signup/3`;
export const postLoginUrl: string = `${getApiUrl()}/partner/login`;
export const getEComerceUrl: string = `${getApiUrl()}/partner/consts/platforms`;

export const apiHeaderJson = { 'Content-Type': 'application/json' };
