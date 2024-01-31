import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1022px) {
    padding-right: 115px;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: top;
    justify-content: space-between;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const ProductText = styled.p`
  margin-bottom: ${props => (props.$text ? '14px' : '0')};
  color: #160b03;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
`;

export const InfoProductWrapper = styled.div`
  margin-bottom: 13px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const ProductImage = styled.img`
  width: 48px;
  height: 67px;
  max-width: none;
  @media (min-width: 768px) {
    width: 206px;
    height: 234px;
  }
`;

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  width: 51px;
  text-align: left;
  @media (min-width: 1022px) {
    width: max-content;
    gap: 14px;
  }
`;

export const ProductTitle = styled.p`
  color: #160b03;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 130%;
  }
`;

export const ItemCharacteristicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #3f3831;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  @media (min-width: 768px) {
    gap: 6px;
    font-size: 18px;
  }
`;

export const PriceQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 19px;
  width: 74px;
  border: 1px solid #160b03;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
`;

export const DecreaseBtn = styled.span`
  padding: 0;
  background-color: transparent;
  border: none;
  fill: ${props => (props.$case === 'true' ? '#9D9A97' : '#160B03')};
`;

export const IncreaseBtn = styled.span`
  padding: 0;
  background-color: transparent;
  border: none;
  fill: ${props => (props.$case === 'true' ? '#9D9A97' : '#160B03')};
`;

export const Icon = styled.svg`
  width: 9px;
  height: 22px;
  &:hover,
  &:focus {
    fill: '#160B03';
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.p`
  color: #3f3831;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ProductDeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
`;

export const DeleteIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #160b03;
  &:hover,
  &:focus {
    fill: #3f3831;
  }
`;

export const Notification = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  padding-top: ${props => props.$paddingTop};
  @media (max-width: 767px) {
    font-size: ${props => (props.$mobFont ? '8px' : 'inherit')};
  }
`;

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
`;

export const AvailableQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
