import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import router from './routes/api_route.js'
import bhashini from 'bhashini-translation'
import bot from './models/bot_response.js'

const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json());
config();

const token = process.env.AuthorizationToken
const userId = process.env.userId
const apiKey = process.env.ulcaApiKey
bhashini.auth(userId, apiKey, token)


app.use('/bot', router)

// let promptInput = "tell me about yoursel"
// console.log('bot respone: ', await bot(promptInput))


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})

