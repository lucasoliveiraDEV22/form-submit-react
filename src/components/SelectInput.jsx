import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectInput = ({ label, name, options, register, errors }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select {...register(name)} error={!!errors[name]}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;