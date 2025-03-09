import { Box, Container } from '@mui/material'
import { useState } from 'react'
import AddressForm from '../components/AddressForm'
import Button from '../components/Button'
import DatePickerComponent from '../components/DatePicker'
import FormInput from '../components/FormInput'
import MaskedInput from '../components/MaskedInput'
import SelectInput from '../components/SelectInput'
import useFormValidation from '../hooks/useFormValidation'

const estadosBrasil = [
  { label: 'Acre (AC)', value: 'AC' },
  { label: 'Alagoas (AL)', value: 'AL' },
  { label: 'Amapá (AP)', value: 'AP' },
  { label: 'Amazonas (AM)', value: 'AM' },
  { label: 'Bahia (BA)', value: 'BA' },
  { label: 'Ceará (CE)', value: 'CE' },
  { label: 'Distrito Federal (DF)', value: 'DF' },
  { label: 'Espírito Santo (ES)', value: 'ES' },
  { label: 'Goiás (GO)', value: 'GO' },
  { label: 'Maranhão (MA)', value: 'MA' },
  { label: 'Mato Grosso (MT)', value: 'MT' },
  { label: 'Mato Grosso do Sul (MS)', value: 'MS' },
  { label: 'Minas Gerais (MG)', value: 'MG' },
  { label: 'Pará (PA)', value: 'PA' },
  { label: 'Paraíba (PB)', value: 'PB' },
  { label: 'Paraná (PR)', value: 'PR' },
  { label: 'Pernambuco (PE)', value: 'PE' },
  { label: 'Piauí (PI)', value: 'PI' },
  { label: 'Rio de Janeiro (RJ)', value: 'RJ' },
  { label: 'Rio Grande do Norte (RN)', value: 'RN' },
  { label: 'Rio Grande do Sul (RS)', value: 'RS' },
  { label: 'Rondônia (RO)', value: 'RO' },
  { label: 'Roraima (RR)', value: 'RR' },
  { label: 'Santa Catarina (SC)', value: 'SC' },
  { label: 'São Paulo (SP)', value: 'SP' },
  { label: 'Sergipe (SE)', value: 'SE' },
  { label: 'Tocantins (TO)', value: 'TO' }
]

const PersonalDataForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useFormValidation()

  const [documentType, setDocumentType] = useState('') // Estado para controlar a seleção de RG ou CPF

  const onSubmit = data => {
    console.log('Dados do Formulário:', data)
  }

  return (
    <Container maxWidth="sm">
      {' '}
      {/* Adicionando um container centralizado */}
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 3, bgcolor: "#F9F9F9", borderRadius: 2, boxShadow: 3 }}>
        <h2>Dados Pessoais</h2>
        <FormInput
          label="Nome Completo"
          name="name"
          register={register}
          errors={errors}
        />
        <DatePickerComponent
          label="Data de Nascimento"
          name="birthDate"
          control={control}
          errors={errors}
        />
        <SelectInput
          label="Tipo de Documento"
          name="documentType"
          register={register}
          errors={errors}
          options={[
            { label: 'RG', value: 'rg' },
            { label: 'CPF', value: 'cpf' }
          ]}
          onChange={e => setDocumentType(e.target.value)} // Atualiza o estado ao selecionar
        />
        {documentType && (
          <MaskedInput
            label={documentType === 'cpf' ? 'CPF' : 'RG'}
            name="document"
            register={register}
            errors={errors}
            mask={documentType === 'cpf' ? '999.999.999-99' : '99.999.999-9'}
          />
        )}
        <FormInput
          label="Telefone"
          name="phone"
          register={register}
          errors={errors}
        />
        <FormInput
          label="E-mail"
          name="email"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Nome do Pai"
          name="fatherName"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Nome da Mãe"
          name="motherName"
          register={register}
          errors={errors}
        />

        <AddressForm register={register} errors={errors} />

        <SelectInput
          label="Estado"
          name="state"
          register={register}
          errors={errors}
          options={estadosBrasil}
        />
        <Button text="Enviar" type="submit" />
        <Button text="Cancelar" type="button" variant="outlined" />
      </Box>
    </Container>
  )
}

export default PersonalDataForm
