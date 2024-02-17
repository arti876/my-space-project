import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface ControllerTextFieldProps {
  control: string;
  name: string;
  rules: object;
  label: string;
  helperText: string;
  error: string;
  type?: string;
  InputProps?: string;
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
