import { Box, Container } from '@mui/material'
import ModeSelect from './components/ModeSelect'
import Test from './components/test'
function App() {

  return (
    <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Test />
      </Box>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Test />
      </Box>
    </Container>
  )
}

export default App
