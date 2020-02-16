import {
  // POST_DETAILS_FIRST_REQUEST,
  POST_DETAILS_FIRST_FAILURE,
  DETAILS_UPDATED
} from "../../utils/constants/authActions";

export const setDetailsFirst = (data: any) => ({
  type: DETAILS_UPDATED,
  // type: POST_DETAILS_FIRST_REQUEST,
  payload: data
});
export const onErrorDetailsFirst:any = () => {
  return {
    type: POST_DETAILS_FIRST_FAILURE,
    payload: {}
  }
};