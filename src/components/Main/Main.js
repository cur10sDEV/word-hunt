import React from 'react'
import Input from "./Input/Input"
import Select from "./Select/Select"
import Result from "./Result/Result"
import "./Main.css"

const Main = ({word, onChange, lang, handleChange, meanings, synonyms, partsOfSpeech, audio}) => {
	return (
		<main>
			<Input word={word} onChange={onChange} />
			<Select lang={lang} handleChange={handleChange}/>
			<Result meanings={meanings} synonyms={synonyms} partsOfSpeech={partsOfSpeech} audio={audio} />
		</main>
	)
}

export default Main