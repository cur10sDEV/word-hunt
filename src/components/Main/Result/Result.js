import React from 'react'

const Result = ({meanings, synonyms, partsOfSpeech, audio}) => {
	return (
		<div className="results">
			<h3 className="subtitle">Parts Of Speech: {partsOfSpeech}</h3>

			<h3 className="subtitle">Meanings</h3>
			{meanings.map((meaning,i) => {
				return <p>{i++}: {meaning}</p>
			})}
			
			<h3 className="subtitle">Synonyms</h3>
			{synonyms.map((synonym,i) => {
				return <p>{i++}: {synonym}</p>
			})}
		</div>
	)
}

export default Result