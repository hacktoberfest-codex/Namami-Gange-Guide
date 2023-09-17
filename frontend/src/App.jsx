import 'regenerator-runtime/runtime'
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ChatBot, Home, Navigation } from 'pages';
import MessageProvider from 'context/MessageProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<MessageProvider>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					fontFamily: 'Poppins',
					headings: { fontFamily: 'Greycliff CF, sans-serif' }
				}}>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/chat' element={<ChatBot />} />
						<Route path='/navigation' element={<Navigation />} />
					</Routes>
				</Router>
			</MantineProvider>
		</MessageProvider>
	);
};

export default App;
