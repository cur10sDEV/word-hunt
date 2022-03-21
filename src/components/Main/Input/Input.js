import React from 'react'
import {TextField} from '@mui/material';

const Input = ({word, onChange}) => {
	return (
			<TextField id="outlined-basic" value={word} onChange={onChange} label="Word" variant="outlined" style={{width: "100%", marginBottom: "1.5rem"}}/>
		)
}

export default Input;