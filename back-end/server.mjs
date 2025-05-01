import app from './app.mjs'
import { PORT } from './constants/PORT.mjs'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
