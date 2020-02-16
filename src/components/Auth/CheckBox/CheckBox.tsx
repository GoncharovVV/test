import React from 'react';
import './CheckBox.scss';
import { ReactComponent as Check } from '../../../assets/icons/check.svg';

export interface CheckBoxProps {
  label: string,
  id: string,
  name: string,
  children?: React.ReactNode,
  value?: string,
  register: any,
}

const CheckBox: React.FC<CheckBoxProps> = ({label, id, name, children, value, register}) => {
  return (
    <div className="checkbox__holder">
      <input type="checkbox" className="checkbox" name={name} id={id} value={value}  ref={register} />
      <label htmlFor={id} className="checkbox__label">
        <Check className="svg-icon checkbox__icon" />
        {label}
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
