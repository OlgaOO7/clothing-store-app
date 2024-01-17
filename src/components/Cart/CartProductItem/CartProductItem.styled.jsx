import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin-right: 16px;
  }
`;

export const InfoProductWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProductImage = styled.img`
  width: 48px;
  height: 67px;
  max-width: none;
  @media (min-width: 768px) {
    width: 160px;
    height: 208px;
  }
`;

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  width: 51px;
  color: #000;
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (min-width: 768px) {
    width: 120px;
    gap: 15px;
    font-size: 24px;
  }
`;

export const ProductTitle = styled.p`
  color: #000;
  font-weight: 400;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ItemCharacteristicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 5px;
  width: 47px;
  height: 22px;
  border: 1px solid #000;
  font-size: 14px;
  @media (min-width: 768px) {
    width: 82px;
    height: 32px;
    padding: 8px 13px;
    font-size: 18px;
  }
`;

export const Icon = styled.svg`
  width: 9px;
  height: 22px;
`;

export const Price = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ProductDeleteBtn = styled.button`
  width: 11px;
  height: 11px;
  background-color: transparent;
  border: none;
  @media (max-width: 767px) {
    margin-right: 6px;
  }
  @media (min-width: 768px) {
    width: 13px;
    height: 13px;
  }
`;

export const DeleteIcon = styled.svg`
  width: 11px;
  height: 11px;
  @media (min-width: 768px) {
    width: 13px;
    height: 13px;
  }
`;

export const Notification = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  padding-top: ${props => props.$paddingTop};
  @media (max-width: 767px) {
    font-size: ${props => (props.mobFont ? '6px' : 'inherit')};
  }
`;

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
`;

export const AvailableQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceWrapper = styled.div`
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
