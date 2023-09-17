import React, { useEffect, useRef, useState } from 'react';
import { Welcome, ChatMessage } from 'components';
import { BsMic } from 'react-icons/bs';
import { samplePhrases } from 'data';
import { useMessageContext } from 'context/MessageProvider';
import SelectLang from 'components/SelectLang';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const ChatBot = () => {
	const [message, setMessage] = useState('');

	const currentChat = false;

	const [state, setState] = useState('idle');
	const [micOpen, setMicOpen] = useState(false);

	const { chatHistory, addMessage } = useMessageContext();

	const bottomRef = useRef(null);

	const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	useEffect(() => {
		scrollToBottom();
	}, [chatHistory, state]);

	const scrollToBottom = () => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const inputRef = useRef(null);

	const focusInput = () => {
		inputRef.current?.focus();
	};

	useEffect(() => {
		focusInput();
		// console.log(state, listening);
	}, [state]);

	const handleSpeechListening = () => {
		SpeechRecognition.startListening({ continuous: true });
		setMessage(transcript);
	};

	const handleSpeechPause = () => {
		SpeechRecognition.stopListening();
		resetTranscript();
		setMessage('');
		setMicOpen(false);
		SpeechRecognition.abortListening();
	};

	return (
		<main className='bg-white md:rounded-lg md:shadow-md p-6 w-full h-full flex flex-col'>
			<h1 className='text-lg text-gray-800 underline underline-offset-2 '>Welcome to NMCG - Chacha Chaudhary</h1>
			<section className='overflow-y-auto flex-grow mb-4 pb-8'>
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
			<div className='flex items-center justify-center h-20'>
				{state === 'idle' ? null : (
					<button
						className='bg-gray-100 text-gray-900 py-2 px-4 my-8'
						onClick={() => {
							console.log('Canceled Query');
						}}>
						Stop generating
					</button>
				)}
			</div>
			<section className='bg-gray-100 rounded-lg'>
				<form
					className='flex items-center justify-center border-2 rounded-lg'
					onSubmit={e => {
						e.preventDefault();
						if (message) {
							addMessage('user', message);
							setState('waiting');
							console.log('Message Sent');
							setTimeout(() => {
								setState('idle');
								addMessage('assistant', 'Wait, I am looking for your query!');
							}, 1100);
						}
						handleSpeechPause();
					}}>
					{message.length > 0 ? (
						<button
							className='bg-gray-100 text-gray-600 py-2 px-4 rounded-l-lg'
							type='button'
							onClick={e => {
								e.preventDefault();
								console.log('Cleared Chats');
								setMessage('');
							}}>
							Clear
						</button>
					) : null}
					<SelectLang />
					<BsMic
						className='text-4xl bg-slate-50 hover:bg-slate-300 ml-1 mr-1 cursor-pointer'
						onClick={() => {
							console.log('Mic clciked');
							if (micOpen) {
								setMicOpen(false);
								handleSpeechListening();
							} else {
								handleSpeechPause();
								setMicOpen(true);
							}
						}}
					/>
					<input type='text' ref={inputRef} className='w-full rounded-l-lg p-2' placeholder={state === 'idle' ? 'Type your message...' : '...'} value={message} onChange={e => setMessage(e.target.value)} disabled={state !== 'idle'} />
					{state === 'idle' ? (
						<button
							className='bg-blue-700 text-white text-base font-bold py-2 px-4 rounded-r-lg disabled:bg-gray-400 disabled:
						cursor-not-allowed'
							type='submit'
							disabled={message ? false : true}>
							Send
						</button>
					) : null}
				</form>
			</section>
		</main>
	);
};

export default ChatBot;
