import styled from 'styled-components';

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    gap: 24px;
    margin-bottom: 22px;
  }
`;
export const RadioForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:last-child {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;
