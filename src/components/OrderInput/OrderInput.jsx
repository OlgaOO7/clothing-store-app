import {
  CheckboxLabel,
  ErrorMessage,
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
  const errorMessage = errors[name]?.message;

  const showMatchesError = errors[name]?.type === 'matches';
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
          <LabelStyle htmlFor={name}>{label}</LabelStyle>
          <InputMaskStyle
            {...register(name)}
            mask="+38(099)999-99-99"
            id={name}
            type={type}
            placeholder={placeholder}
            autoComplete="true"
            $errors={errors[name]}
            autoClear={false}
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
          {showMatchesError && errorMessage && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          )}
        </WrapInput>
      )}
    </>
  );
};
