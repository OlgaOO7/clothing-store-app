import {
  CheckboxLabel,
  InputStyle,
  LabelStyle,
  RadioLabel,
  WrapCheckboxInput,
  WrapInput,
  WrapRadioInput,
} from './OrderInput.styled';

export const OrderInput = ({
  label,
  type,
  name,
  register,
  placeholder,
  defaultChecked,
  disabled,
}) => {
  return (
    <>
      {type === 'radio' ? (
        <WrapRadioInput>
          {' '}
          <RadioLabel htmlFor={name}>
            <input
              type={type}
              id={name}
              {...register(name)}
              defaultChecked={defaultChecked}
              disabled={disabled}
            />
            {label}
          </RadioLabel>
        </WrapRadioInput>
      ) : type === 'checkbox' ? (
        <WrapCheckboxInput>
          {' '}
          <CheckboxLabel>
            <input
              type={type}
              id={name}
              {...register(name)}
              defaultChecked={defaultChecked}
              disabled={disabled}
            />
            {label}
          </CheckboxLabel>
        </WrapCheckboxInput>
      ) : (
        <WrapInput>
          <LabelStyle htmlFor={name}>{label}</LabelStyle>
          <InputStyle
            id={name}
            {...register(name)}
            type={type}
            placeholder={placeholder}
            autoComplete="true"
          ></InputStyle>
        </WrapInput>
      )}
    </>
  );
};
