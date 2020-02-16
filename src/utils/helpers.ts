import { marketingSurveyData } from './constants/authDetails';
import { ImarketingSurveyAnswer } from './authTypes';

export const transformMarketingSurvey = (
  marketingSurvey: number,
  marketingSurveyAnswer: ImarketingSurveyAnswer,
  marketingSurveyOther: string | undefined
): string => {
  let surveyString = '';
  if (typeof marketingSurvey === 'number') {
    surveyString = marketingSurveyData[marketingSurvey].label;
  }
  if (Array.isArray(marketingSurveyAnswer)) {
    const filtered = marketingSurveyAnswer.filter((item: string) => item !== 'Other');
    if (filtered.length > 0) {
      surveyString = `${surveyString}; ${filtered.join('; ')}`;
    }
  } else {
    surveyString = `${surveyString}; ${marketingSurveyAnswer}`;
  }
  if (marketingSurveyOther) {
    surveyString = `${surveyString}; ${marketingSurveyOther}`;
  }
  return surveyString;
};

export const getApiUrl = ():string | undefined => {
  let _apiUrl = process.env['REACT_APP_API_URL'];
  if (window.location.href.indexOf('app.voicefront.ai') > -1) _apiUrl = process.env['REACT_APP_PROD_API_URL'];
  return _apiUrl;
}