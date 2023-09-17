import express from 'express'
import axios from 'axios';

// const bot_url = process.env.BOT_BASEURL;
const bot_url = "http://127.0.0.1:8000"
const bot = (promptInput) => {
    const apiUrl = `${bot_url}?prompt_input=${encodeURIComponent(promptInput)}`;
    console.log('apiurl', apiUrl)
    const result = axios.get(apiUrl)
        .then((response) => {
            // Handle the response from FastAPI here
            // console.log('FastAPI Response:', response.data);
            return response.data
        })
        .catch((error) => {
            console.error('Error:', error);
            return error
        });

    return result
}
// apiurl http://127.0.0.1:8000?prompt_input=tell%20me%20about%20yoursel
export default bot;