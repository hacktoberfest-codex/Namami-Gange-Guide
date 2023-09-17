import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { user, ChachaChaudhary } from 'assets/images';

// This lets us style any markdown tables that are rendered
const CustomTable = ({ children, ...props }) => {
	return (
		<div className='overflow-x-auto'>
			<table {...props} className='w-full text-left border-collapse table-auto'>
				{children}
			</table>
		</div>
	);
};

const ChatMessage = ({ message }) =>
	message.role === 'user' ? (
		<div className='flex items-end justify-end'>
			<div className='bg-gray-300 border-gray-100 border-2 rounded-lg p-2 max-w-xl'>
				<p>{message.content}</p>
			</div>
			<img className='w-10 h-10 rounded-full border-gray-400 mr-2' src={user} alt='User Image' />
		</div>
	) : (
		<div className='flex items-end'>
			{/* <img className='w-20 h-20 rounded-full border-gray-400 mr-2' src={ChachaChaudhary} alt='Chacha Chaudhary' /> */}
			<div className='bg-gray-100 border-gray-300 border-2 rounded-lg p-2 mr-20 max-w-3xl'>
				<ReactMarkdown
					children={message.content}
					remarkPlugins={[remarkGfm]}
					components={{
						table: CustomTable
					}}
				/>
			</div>
		</div>
	);

export default ChatMessage;
