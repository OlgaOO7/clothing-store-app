import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 13px 0 32px;
  @media (min-width: 1440px) {
    padding: 69px 0 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 78px;
  padding-left: 28px;
  padding-right: 28px;
  @media (min-width: 1440px) {
    gap: 112px;
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const CatalogButtonList = styled.ul`
  display: flex;
  gap: 16px 14px;

  @media (min-width: 1440px) {
    gap: 14px;
  }
`;
export const CatalogButton = styled.button`
  padding: 6px 18px;
  background: transparent;
  border: 1px solid #000000;

  font-size: 14px;
  line-height: 16px;
  color: #000000;

  @media (min-width: 1440px) {
    padding: 8px 24px;

    font-size: 18px;
    line-height: 21px;
  }
`;
export const SelectedCatalogButton = styled.button`
  padding: 6px 18px;
  background: #000000;
  border: none;

  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  @media (min-width: 1440px) {
    padding: 10px 24px;

    font-size: 18px;
    line-height: 21px;
  }
`;
