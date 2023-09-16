import express, { Router } from 'express'
const router = Router();

/**
 * all are post methods , api endpoints: 
 * Text in english - `/englishtext`
 * return text and audio in english - `/englishvoice`
 * return text in other language - `/text_in_selected_lang`
 * return text and audio in other language - `/voice_in_selected_lang`
 * 
 */

router.get('/', (req, res) => {
    res.json('hello there!')
})

// Text in english
router.post('/englishtext', async (req, res) => {
    const prompt = req.body;
    const result = await bot(prompt)

    return result;

})

// return text and audio in english
router.post('/englishvoice', async (req, res) => {
    const prompt = req.body;
})

// return text in other language
router.post('/text_in_selected_lang', async (req, res) => {
    const prompt = req.body;
})

// return text and audio in other language
router.post('/voice_in_selected_lang', async (req, res) => {
    const prompt = req.body;
})

export default router; 