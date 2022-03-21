import React from 'react'
import Input from "./Input/Input"
import SelectList from "./Select/Select"
import Result from "./Result/Result"
import "./Main.css"

const Main = ({word, onChange, lang, handleChange, meanings, audio}) => {
	return (
		<main>
			<Input word={word} onChange={onChange} />
			<SelectList lang={lang} handleChange={handleChange}/>
			<Result meanings={meanings} audio={audio} lang={lang} word={word} />
		</main>
	)
}

export default Main