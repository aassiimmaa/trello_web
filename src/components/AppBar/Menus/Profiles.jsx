import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import { useState } from 'react'

function Profile() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 34, height: 34 }} src='https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/404937972_3713252965613092_5530829882711376263_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFtdAY6SWO4E72B5wqiq8vqgbynoN7dsNOBvKeg3t2w06WJ6uuLV1Pb1eMkfhsUeNl7hrdk8KU2Do_IYohdvOJo&_nc_ohc=El8LZ_uv_AcQ7kNvgF2kw7O&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=AjVIUGsAgscCJB-DJ4-BAmm&oh=00_AYDVtzOYNvjy6jaxvutjNGtcp-XiilaoScFKLgSB87M2gA&oe=671532AE' />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profile'
        }}
      >
        <MenuItem>
          <Avatar sx={{ width: '28px', height: '28px', mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ width: '28px', height: '28px', mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile