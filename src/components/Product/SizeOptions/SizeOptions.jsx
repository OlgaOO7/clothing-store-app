import { ListSize, TextSize, TitleSize } from './SizeOptions.styled';

export const SizeOptions = ({
  sizesForSelectedColor,
  selectSize,
  activeSizeId,
}) => {
  return (
    <div>
      <TitleSize>Розмір</TitleSize>
      {sizesForSelectedColor.length > 0 && (
        <ListSize>
          {sizesForSelectedColor.map(({ id: skuId, characteristics }) =>
            characteristics.map(
              ({ id, characteristic, value }) =>
                characteristic.title === 'size' && (
                  <li key={id}>
                    <TextSize
                      className={activeSizeId === id ? 'active' : ''}
                      onClick={() => selectSize(id, skuId)}
                    >
                      {value}
                    </TextSize>
                  </li>
                )
            )
          )}
        </ListSize>
      )}
    </div>
  );
};
