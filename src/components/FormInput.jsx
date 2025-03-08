import TextField from "@mui/material/TextField";

const FormInput = ({ label, name, register, errors, type = "text" }) => {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      variant="outlined"
      margin="normal"
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name]?.message}
    />
  );
};

export default FormInput;