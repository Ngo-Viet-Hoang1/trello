import AddCardIcon from '@mui/icons-material/AddCard'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'
import type { IColumn } from '~/interfaces/Column'
import ListCards from './ListCards'

function Column({ column }: { column: IColumn }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        minWidth: 300,
        maxWidth: 300,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
        ml: 2,
        borderRadius: 2,
        height: 'fit-content',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
      }}
    >
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TextField
          variant="outlined"
          hiddenLabel
          id="filled-hidden-label-small"
          size="small"
          sx={{
            '& .MuiInputBase-input': {
              color: 'primary.dark',
              fontWeight: 500,
              fontSize: '1rem',
            },
            '&.MuiTextField-root': {
              flexGrow: 1,
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
          value={column.title}
          inputProps={{
            style: {
              width: `${Math.max(8, column.title.length)}ch`,
            },
          }}
        />

        <Button
          id="basic-button-column-dropdown"
          aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ minWidth: 'auto', padding: 1 }}
        >
          <MoreHorizIcon sx={{ color: 'white' }} fontSize="small" />
        </Button>
        <Menu
          id="basic-menu-column-dropdown"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              'aria-labelledby': 'basic-button-column-dropdown',
            },
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <AddCardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add new card</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCopyIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentPasteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Archieve this column</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DeleteOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Remove this column</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      <ListCards cards={column.cards} />

      <Box
        sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title="drag to move">
          <DragHandleIcon fontSize="small" sx={{ cursor: 'pointer' }} />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column
