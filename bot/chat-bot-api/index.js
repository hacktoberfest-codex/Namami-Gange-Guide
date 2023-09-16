import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import router from './routes/api_route.js'
import bot from './models/bot_response.js'

const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json());
config();

app.use('/bot', router)

// let promptInput = "tell me about yoursel"
// console.log('bot respone: ', await bot(promptInput))


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})

