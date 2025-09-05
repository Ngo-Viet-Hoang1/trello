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

function AppBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 2,
        boxSizing: 'border-box',
        overflowX: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <img src={TrelloLogo} alt="Trello Logo" height={40} />
        <Workspaces />
        <Recent />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search... "
          size="small"
          type="search"
          sx={{ minWidth: 400 }}
        />
        <Button variant="contained" size="small">
          Create
        </Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title="Notifications">
          <Badge color="error" variant="dot">
            <NotificationsNoneIcon
              sx={{
                color: '#9FADBC',
                ':hover': {
                  bgcolor: '#A6C5E229',
                  borderRadius: '4px',
                  padding: '2px',
                },
              }}
            />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon
            sx={{
              color: '#9FADBC',
              ':hover': {
                bgcolor: '#A6C5E229',
                borderRadius: '4px',
                padding: '2px',
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
