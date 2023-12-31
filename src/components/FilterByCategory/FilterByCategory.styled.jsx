import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 13px 0 32px;
  @media (min-width: 768px) {
    padding: 69px 0 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 26px;
  padding-left: 28px;
  padding-right: 28px;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 112px;
    justify-content: space-between;
    max-width: 1360px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
export const CatalogButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 14px;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    padding: 8px 24px;

    font-size: 18px;
    line-height: 21px;
  }
`;
export const SelectedCatalogButton = styled.button`
  padding: 7px 18px;
  background: #000000;
  border: none;

  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  @media (min-width: 768px) {
    padding: 10px 24px;

    font-size: 18px;
    line-height: 21px;
  }
`;
