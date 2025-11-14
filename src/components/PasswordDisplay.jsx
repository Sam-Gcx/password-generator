import { TextField, Button, Typography } from "@mui/material"

function PasswordDisplay({ password, showGenerateButton, handleGenerate, handleCopy }) {
    return (
        <div className="password-display">
            <TextField
                label='Generate Password'
                variant='outlined'
                fullWidth
                value={password}
            />
            <div className="actions">
                {showGenerateButton && <Button variant="contained" onClick={handleGenerate}>Generate</Button>}
                <Button variant="contained" onClick={handleCopy}>Copy</Button>
            </div>
            <Typography variant='caption'>
                Strength: {password.length < 8 ? "Weak" : password.length < 16 ? "Medium" : "Strong"}
            </Typography>
        </div>
    )
}
export default PasswordDisplay