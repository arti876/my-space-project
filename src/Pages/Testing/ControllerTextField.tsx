import { TextField, InputProps as InputPropsMui } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { IformData, NameType } from '.';

interface ControllerTextFieldProps {
  control: Control<IformData>;
  name: NameType;
  rules: object;
  label: string;
  helperText: string | undefined;
  error: boolean;
  type?: string;
  InputProps?: InputPropsMui;
}

export default function ControllerTextField({
  control,
  name,
  rules,
  label,
  helperText,
  error,
  type,
  InputProps,
}: ControllerTextFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextField
          type={type}
          label={label}
          onChange={(e) => onChange(e)}
          onBlur={onBlur}
          value={value}
          helperText={helperText}
          error={error}
          InputProps={InputProps}
        />
      )}
    />
  );
}

ControllerTextField.defaultProps = {
  type: 'text',
  InputProps: null,
};
