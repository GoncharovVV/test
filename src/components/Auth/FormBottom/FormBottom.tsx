import React from 'react';
import { NavLink } from 'react-router-dom';
import { ILink } from '../../../utils/types';
import './FormBottom.scss';
export interface FormBottomProps {
  text: string;
  link: ILink;
}

const FormBottom: React.FC<FormBottomProps> = ({ text, link }) => {
  return (
    <div className="form__bottom">
      <span className="form__bottom-text">{text}</span>
      <NavLink className="link" exact={true} to={`/${link.linkUrl}`}>
        {link.linkTitle}
      </NavLink>
    </div>
  );
};

export default FormBottom;
