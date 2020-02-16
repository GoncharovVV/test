import { concat, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  catchError,
  // debounceTime,
  filter,
  take,
  map,
  mergeMap,
  switchMap
  // takeUntil
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { POST_LOGIN_REQUEST } from '../../utils/constants/authActions';
import { postLoginUrl, apiHeaderJson } from '../../utils/constants/apiUrls';
import { ApiMethods } from '../../utils/types';
import { updateLoginDetails, onErrorLogin } from '../../store/actions/authActions';

const postLoginEpic = (action$: any) => {
  return action$.pipe(
    ofType(POST_LOGIN_REQUEST),
    take(1),
    filter(({ payload }) => typeof payload === 'object'),
    switchMap(({ payload }): any => {
      return concat(
        ajax({
          url: `${postLoginUrl}`,
          method: ApiMethods.POST,
          withCredentials: true,
          body: JSON.stringify(payload),
          headers: apiHeaderJson
        }).pipe(
          mergeMap((res: any) => {
            console.log(res);
            return of(res.response);
          }),
          map((details: any) => updateLoginDetails(details)),
          catchError((err: any) => {
            console.log(err)
            return of(onErrorLogin());
          })
        )
      );
    })
  );
};
export default postLoginEpic;
