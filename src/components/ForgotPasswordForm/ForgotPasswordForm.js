import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import schemas from 'components/Schemas/schemas';
import { changePasswordAuth } from 'redux/auth/operations';
import theme from 'components/baseStyles/Variables.styled';
import {
  FormRegister,
  FormContainer,
  Input,
  Btn,
  TitleRegister,
  StyledLink,
  BoxText,
  IconValid,
  IconInValid,
  ErrBox,
  Div,
  FormSection,
  BtnContainer,
  Span,
} from './ForgotPasswordForm.styled.js';
import { onSuccess } from 'components/helpers/Messages/NotifyMessages.jsx';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({ values }) => {
    setIsLoading(true);
    const { email } = values;
    dispatch(
      changePasswordAuth({
        email,
      }),
    );
    onSuccess('password has been changed. Please check your email');
    setIsLoading(false);
    navigate(`/signin`);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schemas.changePasswordSchema,
    onSubmit: (values, action) => {
      onSubmit({ values, action });
    },
  });

  const isValid =
    (formik.errors.email && formik.touched.email) || formik.values.email === ''
      ? true
      : false;

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue
      ? null
      : isValide
      ? `${theme.colors.red}`
      : `${theme.colors.darkGreen}`;
  };

  return (
    <FormSection>
      <FormContainer>
        <Formik validationSchema={schemas.changePasswordSchema}>
          <FormRegister onSubmit={formik.handleSubmit} autoComplete="off">
            <TitleRegister>{'Forgot Password'}</TitleRegister>
            <Div>
              <Input
                style={{
                  borderColor: showAccentValidateInput(
                    formik.values.email,
                    formik.errors.email,
                  ),
                }}
                name="email"
                type="email"
                value={formik.values.email}
                validate={schemas.changePasswordSchema.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {!formik.values.email ? null : !formik.errors.email ? (
                <IconValid color={theme.colors.green1} />
              ) : (
                <IconInValid color={theme.colors.red} />
              )}
              {formik.errors.email && formik.touched.email ? (
                <ErrBox>{formik.errors.email}</ErrBox>
              ) : null}
              <Span className="floating-label">Email</Span>
            </Div>
            <BtnContainer>
              <Btn
                type="submit"
                disabled={isValid}
                aria-label="submit to change password"
              >
                {isLoading ? 'Loading' : 'Change Password'}{' '}
              </Btn>
              <BoxText>
                <span>{'Already have an account?'}</span>{' '}
                <StyledLink to="/signin">{'Sign In'}</StyledLink>
              </BoxText>
            </BtnContainer>
          </FormRegister>
        </Formik>
      </FormContainer>
    </FormSection>
  );
};

export default ForgotPasswordForm;
