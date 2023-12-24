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
  errors,
}) => {
  return (
    <>
      {type === 'radio' ? (
        <WrapRadioInput>
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
          {errors[name] && <p>{errors[name].message}</p>}
        </WrapRadioInput>
      ) : type === 'checkbox' ? (
        <WrapCheckboxInput>
          <CheckboxLabel htmlFor={name}>
            <input
              type={type}
              id={name}
              {...register(name)}
              defaultChecked={defaultChecked}
              disabled={disabled}
            />
            {label}
          </CheckboxLabel>
          {errors[name] && <p>{errors[name].message}</p>}
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
          {errors[name] && (
            <p style={{ color: 'red' }}>{errors[name].message}</p>
          )}
        </WrapInput>
      )}
    </>
  );
};
