import React from 'react'

const Result = ({theme, meanings, audio, lang, word}) => {
	return (
		<div className="results" style={{backgroundColor: theme ? "rgba(35,35,35,1.0)" : "rgba(235, 235, 235, 1.0)"}}>
			{/*audio element*/}
			{
				meanings[0] && word && lang === "en" && (
						<audio src={audio && `${audio}`} controls style={{
							borderRadius: "25px",
							margin: "2rem 1rem 0 1rem",
							minWidth: "90%",
							maxWidth: "95%",
						}}>Your browser doesn't support audio element</audio>
				)
			}

			{/*meanings,synonyms,partsOfSpeech,antonyms*/}
				{
					meanings ? (
						meanings.map((item,i) => {
							const {partOfSpeech, definitions, synonyms, antonyms} = item
							return (
								<div className="result" key={i} style={{
									background: theme ? "rgba(75, 75, 75, 1.0)" : "rgba(255, 255, 255, 1.0)",
									boxShadow: "none"
								}}>
									{partOfSpeech && <p><b>Part Of Speech: </b>{partOfSpeech}</p>}
									<hr />
									{definitions && definitions.map((def,j) => {
										return (
											<>
												<p><b>Meaning: </b>{def.definition}</p>
												<hr />
												{def.example &&
													<> 
														<p><b>Example: </b>{def.example}</p>
														<hr />
													</>
												}
											</>
										)
									})}
									{
										synonyms &&
											<>
												<p><b>Synonyms: </b>{synonyms.join(", ")}</p>
												<hr />
											</>
									}
									{
										antonyms &&
											<>
												<p><b>Antonyms: </b>{antonyms.join(", ")}</p>
												<hr />
											</>
									}
								</div>
							)
						})
					) : <p>{word.length === 0 ? "Search Any word" : "No results found sorry"}</p>
				}
		</div>
	)
}

export default Result