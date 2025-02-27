import { useColorScheme } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { Box, FormControl, InputLabel } from '@mui/material'
function ModeSelect() {
  const { mode, setMode } = useColorScheme('')
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  if (mode == null) {
    setMode( localStorage.getItem('mui-mode') ?? 'light')
  }

  return (
    <FormControl sx={{ minWidth: '120px' }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode || localStorage.getItem('mui-mode')}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect