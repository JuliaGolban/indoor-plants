import { Section, Title } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import styled from 'styled-components';
import Select from 'react-select';

export const FormSection = styled(Section)`
  @media screen and (max-width: ${theme.breakpoints.tablet_max}) {
    background-repeat: no-repeat;
    background-size: 620px auto;
    background-position: bottom -250px left 30%;
  }

  @media screen and (min-width: ${theme.breakpoints
      .tablet}) and (max-width: ${theme.breakpoints.desktop_max}) {
    background-repeat: no-repeat;
    background-size: 1396px auto;
    background-position: bottom -130px left 50%;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleDelivery = styled(Title)`
  margin-bottom: 40px;
  margin-top: 0;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;
    margin-bottom: 32px;
    color: ${theme.colors.brown1};
  }
`;
export const Div = styled.div`
  margin-bottom: 32px;
`;

export const SelectInput = styled(Select)``;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  margin-bottom: 32px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 448px;
    font-size: ${theme.fontSizes.medium};
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 558px;
  }
`;

export const Btn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  color: ${theme.colors.brown1};
  background: ${theme.colors.green4};
  transform: scale(1);
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
    color: ${theme.colors.white};
    background: ${theme.colors.brown2};
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
`;
