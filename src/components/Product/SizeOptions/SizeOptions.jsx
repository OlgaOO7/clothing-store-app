import { ListSize, ButtonSize, TitleSize } from './SizeOptions.styled';

export const SizeOptions = ({
  sizesForSelectedColor,
  selectSize,
  activeSizeId,
  messageSize,
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
                    <ButtonSize
                      type="button"
                      className={activeSizeId === id ? 'active' : ''}
                      onClick={() => selectSize(id, skuId)}
                      $error={messageSize}
                    >
                      {value}
                    </ButtonSize>
                  </li>
                )
            )
          )}
        </ListSize>
      )}
    </div>
  );
};
