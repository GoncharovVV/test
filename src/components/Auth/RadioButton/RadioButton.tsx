import React from 'react';
import './RadioButton.scss';
export interface RadioButtonProps {
  label: string,
  id: string,
  name: string,
  value: string,
  children?: React.ReactNode,
  register: any
}

const RadioButton: React.FC<RadioButtonProps> = ({label, id, name, children, value, register}) => {
  return (
    <div className="radio__holder">
      <input type="radio" className="radio" value={value} name={name} id={id} ref={register} />
      <label htmlFor={id} className="rado__label">
        {label}
        {children}
      </label>
    </div>
  );
};

export default RadioButton;
