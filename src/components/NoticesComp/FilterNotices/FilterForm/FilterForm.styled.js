import styled from 'styled-components';

const Form = styled.form`
  display: block;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  border-radius: 40px;
  padding: 20px;
  -webkit-box-shadow: 7px 4px 14px 7px ${props => props.theme.shadowColor};
  -moz-box-shadow: 7px 4px 14px 7px ${props => props.theme.shadowColor};
  box-shadow: 7px 4px 14px 7px ${props => props.theme.shadowColor};

  /* @media screen and (min-width: 768px) {

  } */
`;
const FieldSet = styled.fieldset`
  display: flex;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  border-color: ${props => props.theme.orangeLight};
  border-radius: 40px;
  margin-bottom: 20px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const LegendFieldSet = styled.legend`
  position: relative;
  display: block;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.orangeLight};
  border-radius: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-size: 16px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const InputForm = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .check {
    background-color: ${props => props.theme.orange};
  }

  &:checked ~ .check::before {
    content: '';
    background-color: white;
  }
`;
const LabelForInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;
  margin-left: 30px;
  cursor: pointer;
  font-size: 16px;
  &:hover input ~ .check::before {
    content: '';
    background-color: gray;
  }
`;

const Check = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 28px;
  width: 28px;
  background-color: lightgray;
  border-radius: 50%;
  &:before {
    position: absolute;
    top: 7px;
    left: 7px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    content: '';
  }
`;

const BtnFilter = styled.button`
  cursor: pointer;
  width: 200px;
  height: 38px;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.orangeLight};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.blackText};
  margin: 40px 0 12px;
  transition: all 0.25s ease-in;
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
    cursor: pointer;
  }
  &:focus {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orangeLight};
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 248px;
  }
`;
const BtnContiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export {
  LegendFieldSet,
  FieldSet,
  Form,
  InputForm,
  Check,
  LabelForInput,
  BtnFilter,
  BtnContiner,
};
