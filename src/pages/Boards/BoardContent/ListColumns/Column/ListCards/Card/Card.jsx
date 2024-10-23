import {
  Card as MuiCard,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
          overflow: 'unset'
        }}
      >
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Card test</Typography>
        </CardContent>
      </MuiCard>
    )
  } else {
    return (
      <MuiCard
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
          overflow: 'unset'
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/349314272_792023842246959_4240143555096362812_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGyTjL2FNdHOuH0TOP3a0frs0t9FpW-2WCzS30Wlb7ZYP6vN4YLS0liMXyVzLxc8_Mc8_wvfDykSi2adf1kev2M&_nc_ohc=F-Jh0Ft4lGUQ7kNvgFhthqs&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AYjHi1pXxT6AjlGQkoPuY3q&oh=00_AYBfG6Fu0V-q_ainJIavIjltV-T0GBRUHsaFECQtDEGJkA&oe=671E45C3"
          title="green iguana"
        />
        <CardContent sx={{ p: 1.5 }}>
          <Typography>Thanh An</Typography>
        </CardContent>
        <CardActions
          sx={{
            p: '0 4px 8px 4px'
          }}
        >
          <Button startIcon={<GroupIcon />} size="small">
            20
          </Button>
          <Button startIcon={<CommentIcon />} size="small">
            15
          </Button>
          <Button startIcon={<AttachmentIcon />} size="small">
            10
          </Button>
        </CardActions>
      </MuiCard>
    )
  }
}

export default Card
