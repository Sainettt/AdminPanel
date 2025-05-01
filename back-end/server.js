import app from './app.js'
import { PORT } from './constants/PORT.js'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
