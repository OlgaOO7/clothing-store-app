import { InputStyle, LabelStyle, WrapInput } from './OrderInput.styled';

export const OrderInput = ({
  label,
  type,
  name,
  register,
  errors,
  placeholder,
}) => {
  return (
    <WrapInput>
      <LabelStyle>{label}</LabelStyle>
      <InputStyle
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        autoComplete="true"
      ></InputStyle>
    </WrapInput>
  );
};
