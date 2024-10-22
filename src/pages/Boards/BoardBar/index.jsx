import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: '#d3e9ff'
  }
}

function BoardBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: (theme) => `1px solid ${theme.palette.primary.main}`
    }}>
      <Box sx = {{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx = {MENU_STYLES}
          icon={<DashboardIcon />}
          label="Andev"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button startIcon={<PersonAddIcon />} variant="outlined">Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="Thanh An">
            <Avatar
              alt="Thanh An"
              src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/404937972_3713252965613092_5530829882711376263_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFtdAY6SWO4E72B5wqiq8vqgbynoN7dsNOBvKeg3t2w06WJ6uuLV1Pb1eMkfhsUeNl7hrdk8KU2Do_IYohdvOJo&_nc_ohc=El8LZ_uv_AcQ7kNvgF2kw7O&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=AjVIUGsAgscCJB-DJ4-BAmm&oh=00_AYDVtzOYNvjy6jaxvutjNGtcp-XiilaoScFKLgSB87M2gA&oe=671532AE"
            />
          </Tooltip>
          <Tooltip title="Thanh An">
            <Avatar
              alt="Thanh An"
              src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
            />
          </Tooltip>
          <Tooltip title="Thanh An">
            <Avatar
              alt="Thanh An"
              src="https://photo.znews.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
            />
          </Tooltip>
          <Tooltip title="Thanh An">
            <Avatar
              alt="Thanh An"
              src="https://hoinhabaobacgiang.vn/Includes/NewsImg/1_2024/29736_7-1-1626444923.jpg"
            />
          </Tooltip>
          <Tooltip title="Thanh An">
            <Avatar
              alt="Thanh An"
              src="https://vcdn1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=KU8IkmrM5HbtYIyyS5k1qQ"
            />
          </Tooltip>
          <Tooltip title="Thanh An">
            <Avatar
              alt="Thanh An"
              src="https://photo2.tinhte.vn/data/attachment-files/2021/07/5557920_CV.jpg"
            />
          </Tooltip>
          <Tooltip title="Thanh An">
            <Avatar
              alt="Thanh An"
              src="https://www.ruaanhgiare.vn/wp-content/uploads/2023/06/anh-ngau.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar