import './App.css';
import {useState, useEffect} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { Container } from '@mui/material';

function App() {
  const [word, setWord] = useState("hello")
  const [lang, setLang] = useState("en")
  const [meanings, setMeanings] = useState([])
  const [audioSrc, setAudioSrc] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  async function getMeaning(word, lang) {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`)
      const data = await res.json()
      const dataToUse = await data[0]
      const {phonetics, meanings} = await dataToUse;
      const getAudioSrc = await phonetics[0].audio
      setAudioSrc(getAudioSrc)
      setMeanings(meanings)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getMeaning(word,lang)
  }, [word,lang])

  return (
    <div className="App" >
      <Container maxWidth="md" style={{
      backgroundColor: darkTheme ? "rgba(50,50,50,1.0)": "rgba(252,252,252,1.0)",
      color: darkTheme ? "#fff" : "#000",
      paddingTop: ".75rem",
      transition: "all 0.3s linear"
    }}>
        <Header theme={darkTheme} onChange={() => {
          setDarkTheme((prevValue) => !prevValue)
        }}/>
        <Main
          theme={darkTheme}
          word={word}
          onChange={(e) => setWord(e.target.value)}
          lang={lang}
          handleChange={(e) => setLang(e.target.value)}
          meanings={meanings}
          audio={audioSrc}
        />
         <Footer theme={darkTheme} />
      </Container>
    </div>
  )
}

export default App;