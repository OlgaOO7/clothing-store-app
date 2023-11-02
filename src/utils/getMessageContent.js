export default function getButtonContent(
  isValid,
  errors,
  isSubscribed,
  ErrorMessage,
  SuccessMessage
) {
  if (isSubscribed) {
    return (
      <SuccessMessage>Ви успішно підписалися на сповіщення!</SuccessMessage>
    );
  }
  if (!isValid) {
    return (
      <ErrorMessage>
        Будь ласка, введіть дійсну адресу електронної пошти!
      </ErrorMessage>
    );
  }

  if (errors['email']) {
    return <ErrorMessage>{errors['email'].message}</ErrorMessage>;
  }

  return '';
}
