import React, { useState } from 'react';
import Select from 'react-select';

const options = [
	{ value: 'en', label: 'English' },
	{ value: 'hi', label: 'Hindi' },
	{ value: 'od', label: 'Odia' }
];

const SelectLang = ({ setLang }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	return (
		<div>
			<Select
				defaultValue={selectedOption}
				onChange={data => {
					setSelectedOption(data);
					setLang(data);
				}}
				options={options}
				isSearchable={false}
			/>
		</div>
	);
};

export default SelectLang;
