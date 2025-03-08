import { Button as MuiButton } from '@mui/material'

const Button = ({ text, type = 'button', onClick, variant = 'contained' }) => {
  return (
    <MuiButton type={type} onClick={onClick} variant={variant} fullWidth>
      {text}
    </MuiButton>
  )
}

export default Button
