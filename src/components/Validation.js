import * as yup from 'yup'

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const rgRegex = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;

export const validationSchema = yup.object().shape({
    name: yup.string().matches(/^[A-Za-z\s]+$/, "Nome inválido").required("Nome obrigatório"),
    birthDate: yup.date().required("Data de nascimento obrigatória"),
    documentType: yup.string().oneOf(["rg", "cpf"], "Selecione um documento").required("Campo obrigatório"),
    document: yup.string().when("documentType", {
      is: "cpf",
      then: yup.string().matches(cpfRegex, "Formato de CPF inválido (ex: 000.000.000-00)").required("CPF obrigatório"),
      otherwise: yup.string().matches(rgRegex, "Formato de RG inválido (ex: 00.000.000-0)").required("RG obrigatório")
    }),
    phone: yup.string().matches(/^\d+$/, "Apenas números").required("Telefone obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    fatherName: yup.string().required("Nome do pai obrigatório"),
    motherName: yup.string().required("Nome da mãe obrigatório"),
    address: yup.string().required("Endereço obrigatório"),
    state: yup.string().required("Estado obrigatório")
})
