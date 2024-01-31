import {
  ColorElips,
  ListColor,
  TitleColor,
  Wrap,
  Button,
} from './ColorOptions.styled';

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
              <Button
                type="button"
                $value={color}
                className={colorValue === color ? 'active' : ''}
              >
                <ColorElips
                  $value={color}
                  className={colorValue === color ? 'active' : ''}
                />
              </Button>
            </li>
          ))}
        </ListColor>
      )}
    </Wrap>
  );
};
