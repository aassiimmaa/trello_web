import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}
    >
      <Column />
      <Column />
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: 'primary.main'
        }}
      >
        <Button
          startIcon={<PlaylistAddIcon />}
          sx={{
            color: '#fff',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
