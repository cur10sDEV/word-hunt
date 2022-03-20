import React from 'react'
import {FormControl, InputLabel, MenuItem} from "@mui/material"

const Select = ({lang, handleChange}) => {
	return (
		<FormControl fullWidth>
		  <InputLabel id="demo-simple-select-label">Age</InputLabel>
		  <Select
		    labelId="demo-simple-select-label"
		    id="demo-simple-select"
		    value={lang}
		    label="Age"
		    onChange={handleChange}
		  >
		    <MenuItem value={10}>Ten</MenuItem>
		    <MenuItem value={20}>Twenty</MenuItem>
		    <MenuItem value={30}>Thirty</MenuItem>
		  </Select>
		</FormControl>
	)
}

export default Select