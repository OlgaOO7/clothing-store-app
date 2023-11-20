import { ErrorMessage, Input, Textarea } from './InputField.styled';

export const InputField = ({
  label,
  type,
  name,
  register,
  errors,
  placeholder,
}) => (
  <div>
    {type === 'textarea' ? (
      <Textarea
        id={name}
        {...register(name)}
        placeholder={placeholder}
      ></Textarea>
    ) : (
      <Input
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        autoComplete="true"
      />
    )}

    {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
  </div>
);
