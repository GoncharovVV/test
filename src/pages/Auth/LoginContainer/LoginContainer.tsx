import React from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Email } from '../../../assets/icons/email.svg';
import NotifyStatic from '../../../components/NotifyStatic';
import './LoginContainer.scss';
import Login from '../../../components/Auth/Login';
import { useDispatch } from 'react-redux';
import { postLogin } from '../../../store/actions/authActions';
// import { useParams } from 'react-router-dom';
export interface LoginContainerProps {}

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const { register, errors, handleSubmit } = useForm<any>();
  const evaluation = false;
  const dispatch = useDispatch();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatch(postLogin({email: "shauli@voicefront.ai", password: "1qaz2wsx"}));
  });
  // let { userId } = useParams();
  return (
    <>
      <h1 className="auth__title">Login</h1>
      {evaluation && (
        <NotifyStatic
          text="Your email has been successfully verified!"
          hideIcon={false}
          nameClass="email__notify"
        >
          <Email className="svg-icon success-icon" />
        </NotifyStatic>
      )}
      <Login onSubmit={onSubmit} register={register} errors={errors}/>
    </>
  );
};

export default LoginContainer;
