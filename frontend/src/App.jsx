import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { ChatBot, Home, Navigation } from 'pages';
import MessageProvider from 'context/MessageProvider';
import { BotStateContext } from 'context/BotState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RiverineEcology from 'pages/RiverineEcology';
import Greeting from 'pages/Greeting';
import WarRoom_museum from 'pages/WarRoom_museum';
import bhashini from 'bhashini-translation';
import { AuthorizationToken, userId, ulcaApiKey } from '../config'


const App = () => {
	const [botState, setBotState] = useState('idle');
	const token = AuthorizationToken
	const user_Id = userId
	const apiKey = ulcaApiKey
	bhashini.auth(user_Id, apiKey, token)
	return (
		<MessageProvider>
			<BotStateContext.Provider value={{ botState, setBotState }} >
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						fontFamily: 'Poppins',
						headings: { fontFamily: 'Greycliff CF, sans-serif' }
					}}>
					<Router>
						<Routes>
							<Route path='/' element={<Greeting />} />
							<Route path='/home' element={<Home />} />
							<Route path='/navigation' element={<Navigation />} />
							<Route path='/riverine_ecology' element={<RiverineEcology />} />
							<Route path='/warRoom_museum' element={<WarRoom_museum />} />
							{/* <Route path='/' element={<Dictaphone />} /> */}


						</Routes>
					</Router>
				</MantineProvider>
			</BotStateContext.Provider>
		</MessageProvider>
	);
};

export default App;
