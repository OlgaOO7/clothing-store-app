import Sprite from '../../images/sprite.svg';

export const Button = ({svgURL}) => {
  return (
    <button type="button">
      {svgURL && (
      <svg width={24} height={24}>
        <use href={`${Sprite}` + svgURL} />
      </svg>
      )}
    </button>
  )
}