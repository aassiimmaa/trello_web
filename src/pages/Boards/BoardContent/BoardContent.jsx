import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      color: 'white',
      p: '8px 0'
    }}>
      <ListColumns />
    </Box>
  )
}

export default BoardContent