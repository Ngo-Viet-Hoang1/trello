import Box from '@mui/material/Box'
import type { IBoard } from '~/interfaces/Board'
import ListColumns from './components/ListColumns'

function BoardContent({ board }: { board: IBoard }) {
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
      <ListColumns columns={board.columns} />
    </Box>
  )
}

export default BoardContent
