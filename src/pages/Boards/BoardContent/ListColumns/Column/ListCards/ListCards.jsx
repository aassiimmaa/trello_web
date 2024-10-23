import { Box } from '@mui/material'
import Card from './Card/Card'

function ListCards() {
  return (
    <Box
      sx={{
        p: '0 4px',
        m: '0 4px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: theme =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#E5E5E5',
          borderRadius: '8px'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf'
        }
      }}
    >
      <Card />

      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} temporaryHideMedia />
      ))}
    </Box>
  )
}

export default ListCards
