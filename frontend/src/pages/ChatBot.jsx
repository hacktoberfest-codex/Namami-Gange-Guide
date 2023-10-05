import React, { useEffect, useRef, useState, useContext } from 'react';
import { Welcome, ChatMessage } from 'components';
import { BsCheckLg, BsMic } from 'react-icons/bs';
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from 'react-icons/hi2';
import { samplePhrases } from 'data';
import { useMessageContext } from 'context/MessageProvider';
import { BotStateContext } from 'context/BotState';
import SelectLang from 'components/SelectLang';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import bhashini from 'bhashini-translation';

const ChatBot = () => {
	const [message, setMessage] = useState('');
	const [audio, setAudio] = useState(true);
	const { botState, setBotState } = useContext(BotStateContext);

	const currentChat = false;

	const [state, setState] = useState('idle');
	const [lang, setLang] = useState('en-IN');

	const { chatHistory, addMessage } = useMessageContext();

	const bottomRef = useRef(null);

	const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

	// if (!browserSupportsSpeechRecognition) {
	// 	return <span>Browser doesn't support speech recognition.</span>;
	// }

	useEffect(() => {
		scrollToBottom();
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [chatHistory, state]);

	const scrollToBottom = () => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		setBotState(state);
		console.log(botState);
	}, [state]);
	const inputRef = useRef(null);

	const focusInput = () => {
		inputRef.current?.focus();
	};

	useEffect(() => {
		focusInput();
		// console.log(state, listening);
	}, [state]);

	const baseURL = 'http://localhost:3000/bot';

	const api = axios.create({
		baseURL: baseURL,
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	});

	let endpoint = '/englishtext';

	const getResponse = async (userdata, endpoint) => {
		try {
			const response = await api.post(endpoint, userdata);
			console.log('response', response);
			setState('thinking');
			return response;
		} catch (err) {
			console.error(err);
		}
	};

	const handlelisten = () => {
		SpeechRecognition.startListening({ continuous: true, language: lang });
	};
	const handlestop = () => {
		console.log('pressed send');
		resetTranscript();
		SpeechRecognition.stopListening();
		SpeechRecognition.abortListening();
	};
	useEffect(() => {
		setMessage(transcript);
	}, [transcript]);

	const handleaudio = () => {
		setAudio(!audio);
	};

	return (
		<main className='bg-white bg-opacity-60 backdrop-blur-2xl md:rounded-lg md:shadow-md p-4 pt-1 pb-2  w-full h-full flex flex-col'>
			<h1 className='text-lg text-gray-800  '>Welcome to NMCG - <span className='underline underline-offset-2 text-blue-400'> Chacha Chaudhary</span></h1>
			<section className='chat-box border-t-4 border-stone-300	pt-[0.15rem]  overflow-y-auto flex-grow  pb-2 h-56 '>
				<div className='flex flex-col space-y-4'>
					{chatHistory.length === 0 ? (
						<Fragment>
							<Welcome />
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
								{samplePhrases.map(phrase => (
									<button
										key={phrase}
										onClick={() => {
											addMessage('user', phrase);
											setTimeout(() => {
												setState('idle');
												addMessage('assistant', 'Wait, I am looking for your query!');
											}, 1100);
										}}
										className='bg-gray-100 border-gray-300 border-2 rounded-lg p-4'>
										{phrase}
									</button>
								))}
							</div>
						</Fragment>
					) : (
						chatHistory.map((chat, i) => <ChatMessage key={i} message={chat} />)
					)}

					{currentChat ? <ChatMessage message={currentMessage} /> : null}
				</div>

				<div ref={bottomRef} />
			</section>
			<div className='generating flex items-center justify-center h-2 mb-3'>
				{state === 'idle' ? null : (
					<button
						className='bg-gray-200 rounded-lg text-gray-900 py-1 px-4 text-sm  font-medium mb-2'
						onClick={() => {
							console.log('Canceled Query');
							setState('idle');
						}}>
						Stop generating
					</button>
				)}
			</div>
			<section className='chat-box-input-field flex items-center justify-center rounded-lg p-0.5 border-2 border-grey-300'>
				<button onClick={handleaudio} className='text-3xl mr-1'>
					{audio ? <HiOutlineSpeakerWave /> : <HiOutlineSpeakerXMark />}
				</button>
				<div className='w-32'><SelectLang setLang={setLang} /></div>
				<button onClick={handlelisten} className={listening ? `bg-blue-200 mx-1 py-1 rounded-full` : ``} >
					<BsMic className='text-3xl' />
				</button>
				<input type='text' ref={inputRef} className='w-full rounded-l-lg p-2' placeholder={state === 'idle' ? 'Type your message...' : '...'} value={message} onChange={e => setMessage(e.target.value)} />
				<button
					className='bg-blue-700 text-white text-base font-bold py-2 px-4 rounded-r-lg disabled:bg-gray-400 disabled:cursor-not-allowed'
					disabled={message && state === 'idle' ? false : true}
					onClick={async () => {
						SpeechRecognition.stopListening();
						handlestop();
						if (message) {
							addMessage('user', message);
							setState('waiting');
							SpeechRecognition.abortListening();
							console.log(lang)
							if (audio == false) {
								if (lang === 'hi-IN') {
									endpoint = "text_in_selected_lang"
									const engmsg = await bhashini.nmt('hi', 'en', message);
									setMessage(engmsg);
								} else if (lang === 'en-IN') {
									const resp = await getResponse({ prompt: message }, endpoint);
								}

							}
							if (audio == true) {
								if (lang === 'en-IN') {
									endpoint = 'englishvoice'
									const output = await getResponse({ prompt: message }, endpoint);
									console.log(output);
									resp = output;
								} else if (lang === 'hi-IN') {
									endpoint = 'voice_in_selected_lang';
									const output = await getResponse({ prompt: message }, endpoint);
									console.log(output);
									resp = output;
								}
								console.log('running', endpoint)

							}

							console.log('running', endpoint)

							setMessage('');
							resetTranscript();

							console.log('Message Sent');
							setState('idle');
							addMessage('assistant', resp.data.result);
						}
					}}>
					Send
				</button>


			</section>
		</main>
	);
};

export default ChatBot;
