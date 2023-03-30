import React, { useState } from 'react';
import {
  TextInput as PaperTextInput,
  TextInputProps as PaperTextInputProps,
} from 'react-native-paper';

export interface SecureTextInputProps extends PaperTextInputProps {}

const SecureTextInput = ({ ...props }: SecureTextInputProps) => {
  const [isEntrySecured, setIsEntrySecured] = useState(true);

  const toogleEyeButton = () => {
    setIsEntrySecured(current => !current);
  };

  return (
    <PaperTextInput
      {...props}
      secureTextEntry={isEntrySecured}
      right={
        <PaperTextInput.Icon
          icon={isEntrySecured ? 'eye' : 'eye-off'}
          onPress={toogleEyeButton}
        />
      }
    />
  );
};

export default SecureTextInput;
