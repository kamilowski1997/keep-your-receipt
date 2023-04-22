import React, { useState } from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';
import TextInput, { TextInputProps } from '../TextInput';

export interface SecureTextInputProps extends TextInputProps {}

const SecureTextInput = ({ ...props }: SecureTextInputProps) => {
  const [isEntrySecured, setIsEntrySecured] = useState(true);

  const toogleEyeButton = () => {
    setIsEntrySecured(current => !current);
  };

  return (
    <TextInput
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
