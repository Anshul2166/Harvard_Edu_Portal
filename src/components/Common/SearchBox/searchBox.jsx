import React from 'react';
import Select from 'react-select';

const SearchBox = props => (
	<Select label="Single select"  options={props.options} className="mb-5" onChange={props.selectOption}/>
);

export default SearchBox;
