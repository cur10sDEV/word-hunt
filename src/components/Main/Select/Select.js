import React from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material"
import categories from "../../data/category.js"

const SelectList = ({lang, handleChange}) => {
	return (
		<FormControl fullWidth>
		  <InputLabel id="demo-simple-select-label">Language</InputLabel>
		  <Select
		    labelId="demo-simple-select-label"
		    id="demo-simple-select"
		    value={lang}
		    label="Language"
		    onChange={handleChange}
		  >
		  	{categories.map((item,i) => (
		  		<MenuItem key={i} value={item.label}>{item.value}</MenuItem>
		  	))}
		  </Select>
		</FormControl>
	)
}

export default SelectList