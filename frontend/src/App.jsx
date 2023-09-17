import 'regenerator-runtime/runtime'
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ChatBot, Home } from 'pages';
import MessageProvider from 'context/MessageProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RiverineEcology from 'pages/RiverineEcology';

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
						<Route path='/carousel' element={<RiverineEcology />} />
					</Routes>
				</Router>
			</MantineProvider>
		</MessageProvider>
	);
};

export default App;
