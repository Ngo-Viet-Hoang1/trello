import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Views from './Views'
import Avatars from './Avatars'
import Menus from './Menus'
import IconButton from '@mui/material/IconButton'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

function BoardBar() {
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
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          size="small"
          sx={{
            '& .MuiInputBase-input': { textAlign: 'center' },
            '& fieldset': { border: 'none' },
            '&:hover fieldset': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
          }}
          value={'Untitled'}
        />
        <Views />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatars />
        <IconButton
          sx={{
            fontSize: 14,
            borderRadius: 1,
            bgcolor: '#DCDFE4',
            color: 'text.primary',
            px: 2,
            gap: 1,
          }}
        >
          <PersonAddAltIcon fontSize="small" />
          Share
        </IconButton>
        <Menus />
      </Box>
    </Box>
  )
}

export default BoardBar
