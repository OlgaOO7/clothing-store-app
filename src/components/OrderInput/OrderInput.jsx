import {
  CheckboxLabel,
  InputMaskStyle,
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
          <RadioLabel htmlFor={name} $errors={errors[name]}>
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
          <CheckboxLabel htmlFor={name} $errors={errors[name]}>
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
      ) : name === 'phoneNumber' ? (
        <WrapInput>
          {' '}
          <LabelStyle htmlFor={name}>{label}</LabelStyle>{' '}
          <InputMaskStyle
            {...register(name)}
            mask="+3\8(\099)999-99-99"
            id={name}
            type={type}
            placeholder={placeholder}
            maskChar={null}
            autoComplete="true"
          />
        </WrapInput>
      ) : (
        <WrapInput>
          <LabelStyle htmlFor={name}>{label}</LabelStyle>
          <InputStyle
            id={name}
            {...register(name)}
            type={type}
            placeholder={placeholder}
            $errors={errors[name]}
            autoComplete="true"
          ></InputStyle>
        </WrapInput>
      )}
    </>
  );
};
