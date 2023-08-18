import { Formik } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonStyled,
  FormStyled,
  FieldStyled,
  LabelStyled,
  IconSearch,
} from './NewsSearch.styled';
import { useTranslation } from 'react-i18next';

export const NewsSearch = ({ searchText, setParams }) => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ search: !searchText ? '' : searchText }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        setParams(values.search);
      }}
    >
      {({ isSubmitting, values, handleSubmit, handleChange }) => (
        <FormStyled onSubmit={handleSubmit} autoComplete="off">
          <LabelStyled>
            <FieldStyled
              id="search"
              type="search"
              name="search"
              placeholder={t('Search')}
              value={values.search}
              onChange={e => {
                handleChange(e);
                if (e.target.value === '') {
                  setParams(null);
                }
              }}
            />
            <ButtonStyled type="submit" disabled={isSubmitting}>
              <IconSearch />
            </ButtonStyled>
          </LabelStyled>
        </FormStyled>
      )}
    </Formik>
  );
};
NewsSearch.propTypes = {
  searchText: PropTypes.string,
  setParams: PropTypes.string,
};
