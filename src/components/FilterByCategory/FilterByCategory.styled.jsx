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
  border: 1px solid #160b03;

  font-size: 14px;
  line-height: 16px;
  color: #160b03;
  transition: all 0.7s ease-out;

  &:hover,
  &:focus {
    background: #160b03;
    color: #fff;
  }

  @media (min-width: 768px) {
    padding: 8px 24px;

    font-size: 18px;
    line-height: 21px;
  }
`;
export const SelectedCatalogButton = styled.button`
  padding: 7px 18px;
  background: #160b03;
  border: none;

  font-size: 14px;
  line-height: 16px;
  color: #fff;

  @media (min-width: 768px) {
    padding: 10px 24px;

    font-size: 18px;
    line-height: 21px;
  }
`;
