import Box from '@mui/material/Box'
import Column from './Column'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

function ListColumns() {
  return (
    <>
      <Column />
      <Column />
      <Box
        sx={{
          minWidth: 300,
          maxWidth: 300,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: 2,
          height: 'fit-content',
        }}
      >
        <Button
          startIcon={<AddIcon />}
          sx={{
            borderRadius: 2,
            width: '100%',
            py: 1,
          }}
        >
          Add another list
        </Button>
      </Box>
    </>
  )
}

export default ListColumns
