import { POST_LOGIN_REQUEST, POST_LOGIN_FAILURE, POST_LOGIN_SUCCESS } from "../../utils/constants/authActions";

const updateLoginDetails = (state: any, action: any): any => {
  if (!state) {
    return {
      details: {},
      isLoading: true,
      error: false
    };
  }
  switch (action.type) {
    case POST_LOGIN_SUCCESS:
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case POST_LOGIN_REQUEST:
      return {
        isLoading: true,
        details: {},
        error: false
      };
    case POST_LOGIN_FAILURE:
      return {
        isLoading: false,
        details: action.payload,
        error: true
      };
    default:
      return state.weatherList;
  }
};

export default updateLoginDetails;
