import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { validationSchema } from '../components/Validation'

const useFormValidation = () => {
    const {
      register,
      handleSubmit,
      control,
      watch, // ✅ Agora watch está sendo retornado
      formState
    } = useForm({
      resolver: yupResolver(validationSchema),
    });
  
    return { register, handleSubmit, control, watch, formState }; // Retorna tudo corretamente
  };
  
  export default useFormValidation;