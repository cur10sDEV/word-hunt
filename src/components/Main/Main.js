import React from 'react'
import Input from "./Input/Input"
import SelectList from "./Select/Select"
import Result from "./Result/Result"
import "./Main.css"

const Main = ({theme, word, onChange, lang, handleChange, meanings, audio}) => {
	return (
		<main>
			<Input theme={theme} word={word} onChange={onChange} />
			<SelectList lang={lang} handleChange={handleChange}/>
			<Result theme={theme} meanings={meanings} audio={audio} lang={lang} word={word} />
		</main>
	)
}

export default Main;