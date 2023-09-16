import express from 'express';
import bot from '../models/bot_response.js';

export async function test(req, res) {
    res.json('hello there!')
}

// Text in english
export async function english_text_res(req, res) {
    console.log('iside test func')
    const prompt = req.body.prompt;
    // const result = await bot(prompt)
    return prompt;
}

// return text and audio in english
export async function english_text_audio_res(req, res) {
    const prompt = req.body;

}

// return text in other language
export async function text_in_selected_lang(req, res) {
    const prompt = req.body;
}

// return text and audio in other language
export async function text_audio_in_selected_lang(req, res) {
    const prompt = req.body;
}