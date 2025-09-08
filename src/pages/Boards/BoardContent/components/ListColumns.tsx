import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import type { IColumn } from '~/interfaces/Column'
import Column from './Column'

function ListColumns({ columns }: { columns: IColumn[] }) {
  return (
    <>
      {columns.map((column) => (
        <Column key={column._id} column={column} />
      ))}

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
