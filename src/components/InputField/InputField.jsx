import { Counter, ErrorMessage, Input, Textarea } from './InputField.styled';

export const InputField = ({
  type,
  name,
  register,
  errors,
  placeholder,
  maxLength,
  handleInputChange,
  isApproachingMax,
  charCount,
}) => {
  return (
    <>
      {type === 'textarea' ? (
        <div style={{ position: 'relative' }}>
          <Textarea
            id={name}
            {...register(name)}
            placeholder={placeholder}
            onKeyUp={handleInputChange}
            maxLength={maxLength}
          ></Textarea>
          <Counter style={{ color: isApproachingMax ? 'red' : '' }}>
            {charCount}/{maxLength}
          </Counter>
          {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          <Input
            id={name}
            {...register(name)}
            type={type}
            placeholder={placeholder}
            autoComplete="true"
          />
          {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </div>
      )}
    </>
  );
};
