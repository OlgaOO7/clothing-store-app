import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;
export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    gap: 22px;
    margin-bottom: 28px;
  }
`;
