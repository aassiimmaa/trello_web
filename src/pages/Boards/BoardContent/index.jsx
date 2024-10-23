import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'


const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      color: 'white',
      p: '8px 0'
    }}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}>
        {/* Column 1 */}
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            backgroundColor: 'primary.main',
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}
        >
          {/* Box column header */}
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
            p: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography
              sx = {{
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              variant='h6'
            >
              Column Title
            </Typography>
            <Box>
              <Tooltip title = "More options">
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                    cursor: 'pointer'
                  }}
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Box column content */}
          <Box sx={{
            p:'0 4px',
            m: '0 4px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#E5E5E5',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }

          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/349314272_792023842246959_4240143555096362812_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGyTjL2FNdHOuH0TOP3a0frs0t9FpW-2WCzS30Wlb7ZYP6vN4YLS0liMXyVzLxc8_Mc8_wvfDykSi2adf1kev2M&_nc_ohc=F-Jh0Ft4lGUQ7kNvgFhthqs&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AYjHi1pXxT6AjlGQkoPuY3q&oh=00_AYBfG6Fu0V-q_ainJIavIjltV-T0GBRUHsaFECQtDEGJkA&oe=671E45C3"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5 }}>
                <Typography>Thanh An</Typography>
              </CardContent>
              <CardActions sx={{
                p: '0 4px 8px 4px'
              }}>
                <Button startIcon={ <GroupIcon /> } size="small">20</Button>
                <Button startIcon={ <CommentIcon /> } size="small">15</Button>
                <Button startIcon={ <AttachmentIcon /> } size="small">10</Button>
              </CardActions>
            </Card>
            {Array.from({ length: 10 }).map((_, index) => (
              <Card key={index} sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                overflow: 'unset'
              }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Card {index + 1}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Box column footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button sx={{ color: 'white' }} startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon />
            </Tooltip>
          </Box>
        </Box>

        {/* Column 2 */}
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            backgroundColor: 'primary.main',
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}
        >
          {/* Box column header */}
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
            p: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography
              sx = {{
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              variant='h6'
            >
              Column Title
            </Typography>
            <Box>
              <Tooltip title = "More options">
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                    cursor: 'pointer'
                  }}
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Box column content */}
          <Box sx={{
            p:'0 4px',
            m: '0 4px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#E5E5E5',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }

          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/349314272_792023842246959_4240143555096362812_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGyTjL2FNdHOuH0TOP3a0frs0t9FpW-2WCzS30Wlb7ZYP6vN4YLS0liMXyVzLxc8_Mc8_wvfDykSi2adf1kev2M&_nc_ohc=F-Jh0Ft4lGUQ7kNvgFhthqs&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AYjHi1pXxT6AjlGQkoPuY3q&oh=00_AYBfG6Fu0V-q_ainJIavIjltV-T0GBRUHsaFECQtDEGJkA&oe=671E45C3"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5 }}>
                <Typography>Thanh An</Typography>
              </CardContent>
              <CardActions sx={{
                p: '0 4px 8px 4px'
              }}>
                <Button startIcon={ <GroupIcon /> } size="small">20</Button>
                <Button startIcon={ <CommentIcon /> } size="small">15</Button>
                <Button startIcon={ <AttachmentIcon /> } size="small">10</Button>
              </CardActions>
            </Card>
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} sx={{
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                overflow: 'unset'
              }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                  <Typography>Card {index + 1}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Box column footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button sx={{ color: 'white' }} startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon />
            </Tooltip>
          </Box>
        </Box>
      </Box>


    </Box>
  )
}

export default BoardContent