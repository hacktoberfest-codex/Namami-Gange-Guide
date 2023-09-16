import express from 'express'
import cors from 'cors'
import axios from 'axios'
import router from './routes/api_route.js'

const PORT = 3000
const app = express()
app.use(cors())

app.use('/bot', router)




app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})

