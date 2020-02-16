import React from 'react';
import { emailPattern, passwordPattern } from '../../../utils/constants/constants';
import { Urls } from '../../../utils/types';
import FormBottom from '../FormBottom';
import InputField from '../InputField';
import LoginWith from '../LoginWith';
import './Login.scss';
export interface LoginProps {
  onSubmit: any;
  register: any;
  errors: any;
}

const Login: React.SFC<LoginProps> = ({ register, onSubmit, errors }) => {
  return (
    <form className="form form_short" onSubmit={onSubmit} noValidate={true}>
      <div className="form__row form__row-auth">
        <InputField
          label="YOUR WORK EMAIL"
          type="email"
          name="email"
          errors={errors}
          placeholder="john@acmecorp.com"
          register={register({
            required: true,
            pattern: emailPattern
          })}
        />
      </div>
      <div className="form__row form__row-auth login__password-row">
        <InputField
          label="PASSWORD"
          type="password"
          name="password"
          errors={errors}
          isPassword={true}
          register={register({
            required: true,
            minLength: 8,
            pattern: passwordPattern
          })}
        />
      </div>
      <div className="form__row form__row-auth text_right">
        <button type="button" className="form__forgot-pass">Forgot password?</button>
      </div>
      <div className="form__row form__row-auth ">
        <p className="login__text">
          You are still on our wait list, we’ll notify you once your turn is up
        </p>
      </div>
      <div className="form__row form__row-auth">
        <button type="submit" className="button button__submit">
          LOGIN
        </button>
      </div>
      <div className="form__row form__row-auth">
        <LoginWith />
      </div>
      <FormBottom
        text="Don’t have an account? "
        link={{ linkTitle: 'SIGN UP', linkUrl: `${Urls.SIGNUP}` }}
      />
    </form>
  );
};

export default Login;
