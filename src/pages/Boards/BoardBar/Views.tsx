import BackupTableIcon from '@mui/icons-material/BackupTable'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ClearIcon from '@mui/icons-material/Clear'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LockOutlineIcon from '@mui/icons-material/LockOutline'
import TimelineIcon from '@mui/icons-material/Timeline'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Popper from '@mui/material/Popper'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import ListItemIcon from '~/assets/ListItemIcon'

export default function Views() {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen((previousOpen) => !previousOpen)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined

  return (
    <div>
      <Tooltip title="Views">
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <IconButton onClick={handleClick} sx={{ borderRadius: 1 }}>
            <ListItemIcon />
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </ClickAwayListener>
      </Tooltip>

      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                position: 'relative',
                bgcolor: 'background.paper',
                border: '1px solid #A6C5E229',
                boxShadow: 3,
                p: 2,
                borderRadius: 1,
                width: 300,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontWeight: 500,
                    color: 'primary.main',
                  }}
                >
                  Upgrade for Views
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => setOpen(false)}
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    borderRadius: 1,
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </Box>

              <Box
                sx={{ gap: 2, display: 'flex', flexDirection: 'column', mt: 2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon />
                  Board
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BackupTableIcon />
                    Table
                  </Box>
                  <LockOutlineIcon fontSize="small" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarMonthIcon />
                    Calendar
                  </Box>
                  <LockOutlineIcon fontSize="small" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TimelineIcon />
                    Timeline
                  </Box>
                  <LockOutlineIcon fontSize="small" />
                </Box>
              </Box>

              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 2 }}
              >
                <Typography>See your work in new ways</Typography>
                <Typography>
                  View key timelines, assignments, data, and more directly from
                  your Trello board with Trello Premium.
                </Typography>
                <Button variant="contained">Start free trial</Button>
                <Link sx={{ textAlign: 'center' }} href="#">
                  Learn more about Trello Premium
                </Link>
              </Box>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  )
}
