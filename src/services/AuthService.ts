import { ISignupRes, ISignupForm, IEPlatformRes } from '../utils/authTypes';
import { ApiMethods } from '../utils/types';
import {
  postSignupUrl,
  postDetailsFirstUrl,
  postDetailsSecondUrl,
  getEComerceUrl,
  apiHeaderJson 
} from '../utils/constants/apiUrls';

export default class AuthService {
  postSignUp = async (data: ISignupForm): Promise<ISignupRes> => {
    const url = `${postSignupUrl}`;
    const settings = {
      method: ApiMethods.POST,
      body: JSON.stringify(data),
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    const result = await res.json();
    console.log(result);
    if (!res.ok && res.status === 400) {
      result.error = true;
      return result;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return result;
  };

  postDetailsFirst = async (data: any): Promise<any> => {
    const url = `${postDetailsFirstUrl}`;
    const settings = {
      method: ApiMethods.POST,
      body: JSON.stringify(data),
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    const result = await res.json();
    console.log(result);
    if (!res.ok && res.status === 400) {
      result.error = true;
      return result;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return result;
  };
  postDetailsSecond = async (data: any): Promise<any> => {
    const url = `${postDetailsSecondUrl}`;
    const settings = {
      method: ApiMethods.POST,
      body: JSON.stringify(data),
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    const result = await res.json();
    console.log(result);
    if (!res.ok && res.status === 400) {
      result.error = true;
      return result;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return result;
  };
  getEcomercePlatforms = async (): Promise<IEPlatformRes> => {
    const url = `${getEComerceUrl}`;
    const settings = {
      method: ApiMethods.GET,
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    const data = await res.json();
    if (!res.ok && res.status === 400) {
      data.error = true;
      return data;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return { result: data };
  };
}
