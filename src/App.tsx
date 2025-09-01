import Button from '@mui/material/Button'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="contained"
          color="primary"
        >
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
