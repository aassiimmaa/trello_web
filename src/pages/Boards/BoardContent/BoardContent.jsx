import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'

function BoardContent({ board }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: theme => theme.trello.boardContentHeight,
        color: 'white',
        p: '8px 0'
      }}
    >
      <ListColumns columns={board?.columns} />
    </Box>
  )
}

export default BoardContent
