import Sprite from '../../images/sprite.svg';

export const Button = ({type, onClick, svgURL, children}) => {
  return (
    <button type={type} onClick={onClick}>
      {svgURL && (
      <svg width={24} height={24}>
        <use href={`${Sprite}` + svgURL} />
      </svg>
      )}
      {children}
    </button>
  )
}