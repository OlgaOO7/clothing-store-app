import { useEffect, useState } from 'react';
import { Counter, ErrorMessage, Input, Textarea } from './InputField.styled';

export const InputField = ({
  type,
  name,
  register,
  errors,
  placeholder,
  maxLength,
}) => {
  const [charCount, setCharCount] = useState(0);
  const [isApproachingMax, setIsApproachingMax] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('contact_us_form');
    if (storedData) {
      const messageValue = JSON.parse(storedData).message || '';
      setCharCount(messageValue.length);
      setIsApproachingMax(messageValue.length >= 1000 - 10);
    }
  }, []);

  const handleInputChange = event => {
    const length = event.target.value.length;
    setCharCount(length);
    setIsApproachingMax(length >= maxLength - 10);
  };

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
