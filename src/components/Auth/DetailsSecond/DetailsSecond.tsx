import { createStyles, FormControl, makeStyles, MenuItem, Theme } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { ReactComponent as Left } from '../../../assets/icons/arrow.svg';
import {
  marketingSurveyData,
  annualRevenueData,
  isDeveloperData,
  mainUseData
} from '../../../utils/constants/authDetails';
import {
  IDetailsSecond,
  IMarketingSurveySelect,
  IHandleDetailsStep,
  DetailsStep
} from '../../../utils/authTypes';
import ButtonNext from '../../ButtonNext';
import CheckBox from '../CheckBox';
import RadioButton from '../RadioButton';
import './DetailsSecond.scss';
import { transformMarketingSurvey } from '../../../utils/helpers';
import InputField from '../InputField';
import { AuthServiceContext } from '../../AuthServiceContext';
import AuthError from '../AuthError';

export interface DetailsSecondProps {
  handleStep: IHandleDetailsStep;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: 0,
      minWidth: 120,
      width: '100%',
      background: '#ffffff',
      borderRadius: 5
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);
const DetailsSecond: React.FC<DetailsSecondProps> = ({ handleStep }) => {
  const { handleSubmit, control, watch, errors, register } = useForm<IDetailsSecond>();
  const watchMarketingSurvey = watch('marketingSurvey');
  const watchMarketingSurveyAnswer = watch('marketingSurveyAnswer');
  const [marketingSurveyAnswers, setmarketingSurveyAnswers] = useState<string[]>([]);
  const [showOther, setShowOther] = useState<boolean>(false);
  const [marketingSurveySelect, setMarketingSurveySelect] = useState<IMarketingSurveySelect>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [showErrorMsg, setShowErrorMsg] = useState<string>('');

  const partnerKey: string = useSelector((state: any) => state.partnerKey);
  const { postDetailsSecond } = useContext(AuthServiceContext);
  const onClose = () => {
    setShowError(false);
  };
  const classes = useStyles();
  const onSubmitHandle = handleSubmit(
    ({ marketingSurvey, marketingSurveyAnswer, marketingSurveyOther, ...data }): void => {
      let surveyString = '';
      if (typeof marketingSurvey === 'number') {
        surveyString = transformMarketingSurvey(
          parseInt(marketingSurvey),
          marketingSurveyAnswer,
          marketingSurveyOther
        );
      }
      postDetailsSecond({...data, marketingSurvey: surveyString, partnerKey}).then((data: any) => {
        console.log(data);
        if (data.error && data.message) {
          setShowError(true);
          setShowErrorMsg(data.message);
        } else {
          handleStep(DetailsStep.Done);
        }
      });
    }
  );
  const onBackClick = () => {
    handleStep(DetailsStep.One);
  };
  const onSkipClick = () => {
    handleStep(DetailsStep.Skip);
  };
  const selectItems = marketingSurveyData.map((item: any, idx: number) => (
    <MenuItem key={item.value + idx} value={idx}>
      {item.label}
    </MenuItem>
  ));
  const radioButtons = (arr: any, id: string, name: string) => {
    return arr.map((item: any, idx: number) => (
      <div key={`${id}${idx}`}>
        {typeof item === 'string' ? (
          <RadioButton
            register={register}
            value={item}
            label={item}
            id={`${id}${idx}`}
            name={name}
          />
        ) : (
          <RadioButton
            register={register}
            value={item.text}
            label={item.text}
            id={`${id}${idx}`}
            name={name}
          >
            <a className="link" href={item.link}>
              {item.linkText}
            </a>
          </RadioButton>
        )}
      </div>
    ));
  };
  const checkBoxes = (arr: any, id: string, name?: string) => {
    return arr.map((item: any, idx: number) => (
      <div key={`${id}${idx}`}>
        {typeof item === 'string' ? (
          <CheckBox
            register={register}
            value={item}
            label={item}
            id={`${id}${idx}`}
            name={name || idx.toString()}
          />
        ) : (
          <CheckBox
            register={register}
            value={item.text}
            label={item.text}
            id={`${id}${idx}`}
            name={name || idx.toString()}
          >
            <a className="link" href={item.link}>
              {item.linkText}
            </a>
          </CheckBox>
        )}
      </div>
    ));
  };
  useEffect(() => {
    if (
      Array.isArray(watchMarketingSurveyAnswer) &&
      watchMarketingSurveyAnswer.indexOf('Other') > -1
    ) {
      setShowOther(true);
    } else {
      setShowOther(false);
    }
    if (typeof watchMarketingSurvey === 'number') {
      const marketingSurveyItem = marketingSurveyData[watchMarketingSurvey];
      setmarketingSurveyAnswers(marketingSurveyItem.options);
      setMarketingSurveySelect(marketingSurveyItem.value);
    }
  }, [watchMarketingSurvey, watchMarketingSurveyAnswer]);
  return (
    <form className="form form_short" onSubmit={onSubmitHandle} noValidate={true}>
      <div className="form__row">
        <label className="form__label" htmlFor="store-name">
          1. ARE YOU WILLING TO MARKET YOUR VOICE STORE?
        </label>
        <FormControl variant="outlined" className={classes.formControl}>
          <Controller
            as={
              <Select labelId="marketingSurvey" id="marketingSurvey">
                {selectItems}
              </Select>
            }
            name="marketingSurvey"
            control={control}
            defaultValue=""
          />
        </FormControl>
      </div>
      <div className="form__row">
        {marketingSurveySelect === 'YES' && marketingSurveyAnswers.length > 0
          ? checkBoxes(marketingSurveyAnswers, 'survey-checkbox', 'marketingSurveyAnswer')
          : radioButtons(marketingSurveyAnswers, 'survey-radio', 'marketingSurveyAnswer')}
      </div>
      {showOther && (
        <div className="form__row">
          <InputField
            label="TELL US WHICH?"
            type="text"
            errors={errors}
            name="marketingSurveyOther"
            placeholder="Some other text"
            register={register({
              required: true
            })}
          />
        </div>
      )}
      <div className="form__row">
        <p className="form__label">2. WHAT IS YOUR CURRENT ANNUAL REVENUE?</p>
        {radioButtons(annualRevenueData, 'annual', 'annualRevenue')}
      </div>
      <div className="form__row">
        <p className="form__label">
          3. What would be the main use of having a Voice store on Alexa?
        </p>
        {radioButtons(mainUseData, 'main-use', 'mainUse')}
      </div>
      <div className="form__row">
        <p className="form__label">4. ARE YOU SETTING UP A STORE FOR A CLIENT?</p>
        {radioButtons(isDeveloperData, 'developer', 'isDeveloper')}
      </div>
      <div className="form__row form__row_right">
        <div className="justify-holder">
          <button type="button" onClick={onBackClick} className="back">
            <Left className="svg-icon icon-back" />
            Back
          </button>
          <button type="button" className="link" onClick={onSkipClick}>
            Skip
          </button>
        </div>
        <ButtonNext type={'submit'} />
      </div>
      {showError && <AuthError onClose={onClose} text={showErrorMsg} />}
    </form>
  );
};

export default DetailsSecond;
