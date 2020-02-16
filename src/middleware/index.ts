import { combineEpics, createEpicMiddleware } from 'redux-observable';
import postLoginEpic from './epics/postLogin';
// import postAuthDetailsEpic from './epics/postAuthDetails'; 

export const rootEpic = combineEpics(postLoginEpic);
const epicMiddleware = createEpicMiddleware();

export default epicMiddleware;
