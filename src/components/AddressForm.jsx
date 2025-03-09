import { Box } from '@mui/material'
import FormInput from './FormInput'


const AddressForm = ({ register, errors }) => {
  return (
    <Box>
      <h3>Endereço</h3>
      <FormInput
        label="Rua e Número"
        name="address"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Complemento"
        name="complement"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Bairro"
        name="neighborhood"
        register={register}
        errors={errors}
      />
      <FormInput
        label="Cidade"
        name="city"
        register={register}
        errors={errors}
      />
 
    </Box>
  )
}

export default AddressForm
