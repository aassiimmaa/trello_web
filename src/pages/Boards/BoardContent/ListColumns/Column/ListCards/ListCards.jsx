import { Box } from '@mui/material'
import Card from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCards({ cards }) {
  return (
    <SortableContext items={cards?.map((c => c._id))} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          p: '0 4px 4px 4px',
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
        {cards.map((card) => {
          return <Card key={card._id} card={card} />
        })}
      </Box>
    </SortableContext>
  )
}

export default ListCards
