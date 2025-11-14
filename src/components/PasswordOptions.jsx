import { Slider, Checkbox, FormControlLabel, Typography } from '@mui/material'
function PasswordOptions({ options, setOptions }) {
    const handleChange = (e, key) => {
        setOptions(prev => ({ ...prev, [key]: e.target.checked })) //注意这个防止并发的写法
    }
    return (
        <div className="options">
            <Typography>Password Length:{options.length}</Typography>
            <Slider
                min={4}
                max={32}
                value={options.length}
                onChange={(e, val) => setOptions(prev => ({ ...prev, length: val }))}  //取的永远是当前状态，防止并发
            />
            <FormControlLabel
                control={<Checkbox checked={options.useUppercase} onChange={(e) => handleChange(e, 'useUppercase')} />} //在箭头函数参数列表里写的是形参（变量名），只有调用可以传常量
                label='Include Uppercase'
            />
            <FormControlLabel
                control={<Checkbox checked={options.useLowercase} onChange={(e) => handleChange(e, 'useLowercase')} />}
                label='Include Lowercase'
            />
            <FormControlLabel
                control={<Checkbox checked={options.useNumbers} onChange={(e) => handleChange(e, 'useNumbers')} />}
                label='Include Number'
            />
            <FormControlLabel
                control={<Checkbox checked={options.useSymbols} onChange={(e) => handleChange(e, 'useSymbols')} />}
                label='Include Symbol'
            />
        </div>
    )
}
export default PasswordOptions