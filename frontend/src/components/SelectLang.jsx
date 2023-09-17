import React, { useState } from 'react'
import Select from 'react-select';

const options = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'Hindi' },
    { value: 'od', label: 'Odia' },
];

function SelectLang() {
    const [selectedOption, setSelectedOption] = useState('null');
    return (
        <div>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable="true"
            />
        </div>
    )
}

export default SelectLang
