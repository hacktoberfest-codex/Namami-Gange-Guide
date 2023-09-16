import express from 'express'
import axios from 'axios';

const bot_url = process.env.BOT_BASEURL;

const bot = (promptInput) => {
    const apiUrl = `${bot_url}?prompt_input=${encodeURIComponent(promptInput)}`;
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

export default bot;