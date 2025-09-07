import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Avatars from './Avatars'
import Menus from './Menus'
import Views from './Views'

function BoardBar() {
  const [boardTitle, setBoardTitle] = useState('Untitled')

  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 2,
        boxSizing: 'border-box',
        overflowX: 'auto',
        borderTop: '1px solid #A6C5E229',
        bgcolor: '#005c91',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          size="small"
          sx={{
            '& .MuiInputBase-input': {
              textAlign: 'center',
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: '2px solid ',
                borderColor: 'primary.main',
              },
            },
          }}
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          inputProps={{
            style: {
              width: `${Math.max(8, boardTitle.length)}ch`,
              minWidth: '50px',
            },
          }}
        />
        <Views />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatars />

        <Button
          variant="contained"
          size="small"
          sx={{ display: 'flex', gap: 1, fontSize: 13 }}
        >
          <PersonAddAltIcon fontSize="small" />
          Share
        </Button>
        <Menus />
      </Box>
    </Box>
  )
}

export default BoardBar
