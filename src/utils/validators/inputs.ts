import React from 'react';

export const validateNumericOnlyInput = (value: string) =>
  /^[0-9]+$/.test(value);

export const setInputStateWithNumericOnlyValidation =
  (setState: React.Dispatch<React.SetStateAction<string>>) =>
  (value: string) => {
    (validateNumericOnlyInput(value) || value === '') && setState(value);
  };
