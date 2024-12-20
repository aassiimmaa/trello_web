import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  return (
    <SortableContext items={columns.map(c => c._id)} strategy={horizontalListSortingStrategy}>
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
        {columns.map(column => {
          return <Column key={column._id} column={column}/>
        })}
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
    </SortableContext>
  )
}

export default ListColumns
