import React, { useState } from 'react';
import Select from 'react-select';

/**
 * English (India) en-IN
 *  ["India", "hi-IN"]
 */
const options = [
	{ value: 'en-IN', label: 'English' },
	{ value: 'hi-IN', label: 'Hindi' }
];

const SelectLang = ({ setLang }) => {
	const [selectedOption, setSelectedOption] = useState(options[0]);

	return (
		<div>
			<Select
				defaultValue={selectedOption}
				onChange={data => {
					// console.log(data.value);
					setSelectedOption(data.value);
					setLang(data.value);
				}}
				menuPlacement='top'
				options={options}
				isSearchable={false}
			/>
		</div>
	);
};

export default SelectLang;
