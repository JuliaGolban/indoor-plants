import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as iconUser } from 'images/svg/icon_user.svg';

const MobileAccountButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 46px auto 0 auto;
  padding: 8px 36px;

  height: 35px;
  border-radius: 40px;
  text-decoration: none;
  background-color: ${props => props.theme.orangeLight};
  border: 2px solid ${props => props.theme.orangeLight};
  color: ${props => props.theme.white};

  font-family: 'Manrope';
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    height: 44px;
    display: none;
  }
`;

const AccountButton = styled(MobileAccountButton)`
  display: none;

  @media screen and (min-width: 768px) {
    padding: 8px 28px;
    display: flex;
    height: 44px;
    font-size: 20px;
    line-height: 27px;
  }
`;

const IconUser = styled(iconUser)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: block;
  fill: ${props => props.theme.white};
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

const AvatarUser = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: block;
  fill: ${props => props.theme.white};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export { MobileAccountButton, AccountButton, IconUser, AvatarUser };
