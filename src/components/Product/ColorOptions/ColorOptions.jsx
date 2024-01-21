import { ColorElips, ListColor, TitleColor, Wrap } from './ColorOptions.styled';

export const ColorOptions = ({
  uniqueColors,
  colorValue,
  setColorValue,
  setClickedIndex,
  setQuantity,
  setSkuIdProduct,
}) => {
  return (
    <Wrap>
      <TitleColor>Колір</TitleColor>
      {uniqueColors.length > 0 && (
        <ListColor>
          {uniqueColors.map((color, index) => (
            <li
              key={index}
              onClick={() => {
                setColorValue(color);
                setClickedIndex(0);
                setQuantity(1);
                setSkuIdProduct(null);
              }}
            >
              <ColorElips
                color={color}
                className={colorValue === color ? 'active' : ''}
              />
            </li>
          ))}
        </ListColor>
      )}
    </Wrap>
  );
};
