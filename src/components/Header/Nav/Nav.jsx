import React from 'react';
import PropTypes from 'prop-types';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MobileNav = ({ toggleMenu }) => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();

  return (
    <MobileNavList>
      <NavItem to={`/news?${searchParams}`} onClick={toggleMenu}>
        {t('News')}
      </NavItem>
      <NavItem to={`/notices/sell?${searchParams}`} onClick={toggleMenu}>
        {t('Find pet')}
      </NavItem>
      <NavItem to="/friends" onClick={toggleMenu}>
        {t('Our friends')}
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = () => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();

  return (
    <NavList>
      <NavItem to={`/news?${searchParams}`}>{t('News')}</NavItem>
      <NavItem to={`/notices/sell?${searchParams}`}>{t('Find pet')}</NavItem>
      <NavItem to="/friends">{t('Our friends')}</NavItem>
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
