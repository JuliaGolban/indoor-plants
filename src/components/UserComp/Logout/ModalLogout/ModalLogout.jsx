import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  ModalWrapper,
  CloseBtnWrapper,
  ModalCloseBtn,
  CloseIcon,
  ModalDescription,
  ModalButtonWrapper,
  ModalButton,
} from './ModalLogout.styled';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export const ModalLogout = ({ onClose, onCloseBtn }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleDelete = () => {
    dispatch(logOut());
    onClose();
  };

  return (
    <ModalWrapper>
      <CloseBtnWrapper>
        <ModalCloseBtn type="button" onClick={onCloseBtn}>
          <CloseIcon />
        </ModalCloseBtn>
      </CloseBtnWrapper>
      <ModalDescription>{t('Are you sure you want to exit?')}</ModalDescription>
      <ModalButtonWrapper>
        <ModalButton type="button" onClick={handleDelete}>
          {t('Yes')}
        </ModalButton>
        <ModalButton
          type="button"
          onClick={onCloseBtn}
          style={{
            backgroundColor: '#F59256',
            color: 'white',
            marginLeft: '20px',
          }}
        >
          {t('No')}
        </ModalButton>
      </ModalButtonWrapper>
    </ModalWrapper>
  );
};

ModalLogout.propTypes = {
  onClose: PropTypes.function,
  onCloseBtn: PropTypes.function,
};
