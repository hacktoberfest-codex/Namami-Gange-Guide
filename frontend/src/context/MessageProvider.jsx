import React, { createContext, useContext, useState } from 'react';
import { chatHistory as messages } from '../data';

const MessageContext = createContext({
	chatHistory: []
});

const MessageProvider = ({ children }) => {
	const [chatHistory, setChatHistory] = useState(messages);

	const addMessage = (role, content) => {
		const messageObj = { role, content };
		setChatHistory(prev => [...prev, messageObj]);
	};

	return <MessageContext.Provider value={{ chatHistory, addMessage }}>{children}</MessageContext.Provider>;
};

export const useMessageContext = () => useContext(MessageContext);

export default MessageProvider;
