import styled from 'styled-components';

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  @media (min-width: 768px) {
    gap: 24px;
    margin-bottom: 37px;
  }
`;
export const RadioForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    gap: 8px;
  }
`;
