import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";

const MaskedInput = ({ label, name, register, errors, mask }) => {
  return (
    <InputMask mask={mask} {...register(name)}>
      {(inputProps) => (
        <TextField
          {...inputProps}
          label={label}
          fullWidth
          variant="outlined"
          margin="normal"
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    </InputMask>
  );
};

export default MaskedInput;