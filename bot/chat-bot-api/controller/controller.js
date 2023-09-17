import express from 'express';
import bot from '../models/bot_response.js';
import bhashini from 'bhashini-translation';

export async function test(req, res) {
	res.json('hello there!');
}

// Text in english
export async function english_text_res(req, res) {
	try {
		const prompt = req.body.prompt;
		const result = await bot(prompt);

		res.json({ result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

// return text and audio in english
export async function english_text_audio_res(req, res) {
	try {
		const prompt = req.body.prompt;
		const response = await bot(prompt);
		const audioUri = await bhashini.tts('en', prompt);
		const result = { response, audioUri };

		res.json({ result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

// return text in other language
export async function text_in_selected_lang(req, res) {
	try {
		const prompt = req.body.prompt;
		const result = await bot(prompt);

		res.json({ result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

// return text and audio in other language
export async function text_audio_in_selected_lang(req, res) {
	try {
		const prompt = req.body.prompt;
		const result = await bot(prompt);

		res.json({ result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
