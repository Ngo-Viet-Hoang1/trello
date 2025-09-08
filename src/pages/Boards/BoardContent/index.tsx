import Box from '@mui/material/Box'
import ListColumns from './components/ListColumns'

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) => `${theme.trello.boardContentHeight}`,
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        py: 1,
      }}
    >
      <ListColumns />
    </Box>
  )
}

export default BoardContent
