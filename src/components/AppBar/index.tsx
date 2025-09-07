import AppsIcon from '@mui/icons-material/Apps'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import TrelloLogo from '~/assets/trello.svg'
import ModeSelect from '../ModeSelect'
import Profiles from './Menus/Profiles'
import Recent from './Menus/Recent'
import Workspaces from './Menus/Workspaces'
import AddBoxIcon from '@mui/icons-material/AddBox'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 2,
        gap: 4,
        boxSizing: 'border-box',
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#005180',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <img src={TrelloLogo} alt="Trello Logo" height={40} />
        <Workspaces />
        <Recent />
      </Box>

      <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search... "
          size="small"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            minWidth: 300,
            maxWidth: 600,
            flexGrow: 1,
            '& fieldset': { my: 0.3 },
            '& input': { color: 'white' },
            '& label': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
                borderWidth: 1,
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {searchValue && (
                  <Button
                    onClick={() => setSearchValue('')}
                    size="small"
                    sx={{ color: 'white', minWidth: 0, p: 0 }}
                  >
                    <ClearIcon fontSize="small" />
                  </Button>
                )}
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          size="small"
          sx={{ display: 'flex', gap: 1, fontSize: 13 }}
        >
          <AddBoxIcon />
          Create
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title="Notifications">
          <Badge color="error" variant="dot">
            <NotificationsNoneIcon
              sx={{
                color: 'white',
                ':hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                },
              }}
            />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon
            sx={{
              color: 'white',
              ':hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
              },
            }}
          />
        </Tooltip>

        <ModeSelect />
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
