import { useState, useEffect } from 'react';
import { Container, Typography, FormControlLabel, Checkbox, Box } from '@mui/material'
import PasswordOptions from './components/PasswordOptions'
import PasswordDisplay from './components/PasswordDisplay'
import { generatePassword } from './utils/generatePassword';
import './style.scss'

function App() {

  const [autoGenerate, setAutoGenerate] = useState(true)
  const [options, setOptions] = useState({
    length: 12,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true
  })
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (autoGenerate) {
      handleGenerate()
    }
  }, [autoGenerate, options])

  const handleGenerate = () => {
    const newPassword = generatePassword(options)
    setPassword(newPassword)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password)   //注意这个剪贴到粘贴板的写法
    alert("Password copied")
  }

  return (
    <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <Container maxWidth='sm' className='container'>
        <Typography variant='h4' gutterBottom>Password Generator</Typography>
        <FormControlLabel
          control={<Checkbox checked={autoGenerate} onChange={(e) => setAutoGenerate(e.target.checked)} />}
          label='Auto-generate password when option change'
        />
        <PasswordOptions options={options} setOptions={setOptions} />
        <PasswordDisplay password={password} handleCopy={handleCopy} handleGenerate={handleGenerate} showGenerateButton={!autoGenerate} />
      </Container>
    </Box>
  )
}

export default App
