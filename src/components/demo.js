import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { handleBreakpoints } from '@mui/system';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

export default function demo() {
    return (
        <div>
            <h1>Meow</h1>
            <Dropdown options={options} onChange={handleChange} value={defaultOption} placeholder="Select an option" />
        </div>
    )
}

const handleChange = () => {
    console.log("Changed!")
}