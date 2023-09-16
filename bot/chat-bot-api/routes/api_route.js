import express, { Router } from 'express'
import * as controller from '../controller/controller.js';
const router = Router();


/**
 * all are post methods , api endpoints: 
 * Text in english - `/englishtext`
 * return text and audio in english - `/englishvoice`
 * return text in other language - `/text_in_selected_lang`
 * return text and audio in other language - `/voice_in_selected_lang`
 * 
 */

router.route('/').get(controller.test)

router.route('/englishtext').post(controller.english_text_res)
router.route('/englishvoice').post(controller.english_text_audio_res)
router.route('/text_in_selected_lang').post(controller.text_in_selected_lang)
router.route('/voice_in_selected_lang').post(controller.english_text_audio_res)

export default router; 