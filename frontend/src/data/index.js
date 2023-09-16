const samplePhrases = ['Can you tell me more about the objectives of the Namami Gange Programme?', 'What are the key achievements and milestones of the Ganga rejuvenation efforts?', 'What is being done to monitor and control industrial effluents in the Ganga River?'];

const chatHistory = [
	{
		role: 'user',
		content: "Hello, I'm interested in learning about the Namami Gange Programme."
	},
	{
		role: 'assistant',
		content: 'Hello! That sounds great. The Namami Gange Programme is an integrated conservation mission for the Ganga River. How can I assist you with it?'
	},
	{
		role: 'user',
		content: 'What are the main pillars of the Namami Gange Programme?'
	},
	{
		role: 'assistant',
		content: 'The main pillars of the Namami Gange Programme include Sewerage Treatment Infrastructure, River-Front Development, River-Surface Cleaning, Bio-Diversity, Afforestation, Public Awareness, Industrial Effluent Monitoring, and Ganga Gram. Would you like to know more about any specific pillar?'
	},
	{
		role: 'user',
		content: 'Tell me about the progress in creating sewerage treatment capacity.'
	},
	{
		role: 'assistant',
		content: 'Currently, 48 sewage management projects are under implementation, and 99 sewage projects have been completed in various states. Work is underway to create a sewerage capacity of 5658.37 MLD (Million Liters per Day).'
	},
	{
		role: 'user',
		content: 'What initiatives have been taken for river surface cleaning?'
	},
	{
		role: 'assistant',
		content: 'River surface cleaning initiatives are in progress at 11 locations for collecting floating solid waste from the Ghats and River. It helps in maintaining the cleanliness of the Ganga.'
	}
];

export { chatHistory, samplePhrases };
