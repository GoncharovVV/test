import React, { useState } from 'react';
import { ReactComponent as EyeBlocked } from '../../../assets/icons/eye-blocked.svg';
import { ReactComponent as Eye } from '../../../assets/icons/eye.svg';
import { formErrors } from '../../../utils/constants/errors';

export interface InputFieldProps {
  register: any;
  errors?: any;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  isPassword?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  register,
  errors,
  label,
  type,
  name,
  placeholder,
  isPassword: password = false
}) => {
  const [inputType, setInputType] = useState<string>(type);
  const togglePassword = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
  };

  return (
    <>
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <div className="input__holder">
        {password &&
          <button type="button" onClick={togglePassword} className="toggle__password-type">
            {inputType === 'password' && <EyeBlocked className="svg-icon icon__toggle-password" />}
            {inputType === 'text' && <Eye className="svg-icon icon__toggle-password" />}
          </button>
        }
        <input
          className={`form__input ${errors[name] ? 'form__input_error' : ''}`}
          type={inputType}
          name={name}
          id={name}
          placeholder={placeholder ? placeholder : ''}
          ref={register}
        />
      </div>
      {errors[name] && errors[name].type === 'pattern' && (
        <p className="form__error-text">{errors[name].message}</p>
      )}
      {errors[name] && errors[name].type && (
        <p className="form__error-text">{formErrors[errors[name].type]}</p>
      )}
    </>
  );
};

export default InputField;
