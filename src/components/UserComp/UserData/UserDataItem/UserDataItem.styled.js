import styled from 'styled-components';

export const UserDataItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 12px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const UserDataItemInputBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDataItemLabel = styled.label`
  display: block;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.8;
  }
`;

export const UserDataItemInput = styled.input`
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;
  width: 159px;
  height: 24px;
  padding: 4px 18px;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.8;
    width: 216px;
    height: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Error = styled.div`
  font-size: 10px;
  line-height: 1;
  font-weight: 500;

  padding: 1px, 8px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  border-radius: 40px;

  position: absolute;
  bottom: -10px;
  right: 20px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const UserDataItemBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-color: transparent;
  margin-left: 9px;
  cursor: pointer;
  transform: all 150ms linear;
  transition: all 0.25s ease-in;

  :disabled {
    svg {
    }
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-left: 24px;
  }
`;
