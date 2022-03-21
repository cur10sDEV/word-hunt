import React from 'react'
import {TextField} from '@mui/material';

const Input = ({theme, word, onChange}) => {
	const inputProps = {
		color: "#fff",
	}
	return (
			<TextField id="outlined-basic" value={word} onChange={onChange} label="Word" inputProps={inputProps} variant="outlined" style={{
				width: "100%",
				marginBottom: "1.5rem"
			}}/>
		)
}

export default Input;