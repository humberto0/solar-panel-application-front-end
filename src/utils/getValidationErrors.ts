import { ValidationError } from 'yup';

interface TotalErrors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): TotalErrors {
  const validationErrors: TotalErrors = {};
  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
