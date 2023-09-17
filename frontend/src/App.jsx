import 'regenerator-runtime/runtime';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ChatBot, Home, Navigation } from 'pages';
import MessageProvider from 'context/MessageProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RiverineEcology from 'pages/RiverineEcology';
import Greeting from 'pages/Greeting';
import WarRoom_museum from 'pages/WarRoom_museum';

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
						<Route path='/riverine_ecology' element={<RiverineEcology />} />
						<Route path='/warRoom_museum' element={<WarRoom_museum />} />
						{/* <Route path='/' element={<Greeting />} /> */}
					</Routes>
				</Router>
			</MantineProvider>
		</MessageProvider>
	);
};

export default App;
