import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoProductWrapper = styled.div`
  display: flex;
  gap: 35px;
  /* width: 493px; */
  margin-right: 195px;
`;

export const ProductImage = styled.img`
  width: 48px;
  height: 67px;
  @media (min-width: 768px) {
    width: 206px;
    height: 234px;
  }
`;

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 250px;
  color: #000;
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ProductTitle = styled.p`
  color: #000;
  width: max-content;
  font-weight: 400;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 13px;
  margin-right: 115px;
  width: 82px;
  height: 32px;
  border: 1px solid #000;
  font-size: 18px;
`;

export const Icon = styled.svg`
  width: 9px;
  height: 22px;
`;

export const Price = styled.p`
  /* margin-right: 219px; */
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ProductDeleteBtn = styled.button`
  width: 7px;
  height: 7px;
  background-color: transparent;
  border: none;
  @media (min-width: 768px) {
    width: 13px;
    height: 13px;
  }
`;

export const DeleteIcon = styled.svg`
  width: 7px;
  height: 7px;
  @media (min-width: 768px) {
    width: 13px;
    height: 13px;
  }
`;

export const Notification = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  padding-top: ${props => props.paddingTop};
`;

export const Wrapp = styled.div`
  display: flex;
`;

export const AvailableQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceWrapper = styled.div`
  width: 130px;
  margin-right: 180px;
`;
